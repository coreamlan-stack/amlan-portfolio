'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import Image from 'next/image';

// Experimental WebGL1 distortion is opt-in on hover-capable devices.
// Mobile/reduced-motion users retain the native image and CSS highlight.
const vertexShader = `
attribute vec2 aPosition;
varying vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const fragmentShader = `
precision mediump float;
uniform sampler2D uTexture;
uniform vec2 uPointer;
uniform float uTime;
uniform float uAspect;
varying vec2 vUv;

void main() {
  vec2 uv = vec2(vUv.x, 1.0 - vUv.y);
  vec2 delta = (uv - uPointer) * vec2(uAspect, 1.0);
  float distanceFromPointer = length(delta);
  float influence = smoothstep(0.48, 0.0, distanceFromPointer);
  float ripple = sin(distanceFromPointer * 39.0 - uTime * 3.0) * 0.008;
  float displacement = influence * (0.014 + ripple);
  vec2 direction = normalize(delta + vec2(0.0001));
  vec2 offset = direction * displacement / vec2(uAspect, 1.0);
  vec4 pixel = texture2D(uTexture, clamp(uv + offset, 0.002, 0.998));
  float glimmer = pow(max(0.0, 1.0 - abs(distanceFromPointer - 0.21) * 9.0), 2.0) * influence;
  gl_FragColor = vec4(pixel.rgb + vec3(0.08, 0.14, 0.015) * glimmer, 1.0);
}
`;

function compile(gl, kind, source) {
  const shader = gl.createShader(kind);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function FluidProjectCover({ src, alt, priority = false }) {
  const canvasRef = useRef(null);
  const surfaceRef = useRef(null);
  const contextRef = useRef(null);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });
  const loopRef = useRef(0);
  const [active, setActive] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    const device = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = navigator.connection || navigator.mozConnection;
    const eligible = device.matches &&
      !reducedMotion.matches &&
      !connection?.saveData &&
      (navigator.deviceMemory || 8) > 4;
    setSupported(eligible);
    if (!eligible) setActive(false);
    const update = () => {
      const allow = device.matches && !reducedMotion.matches && !connection?.saveData;
      setSupported(allow);
      if (!allow) setActive(false);
    };
    device.addEventListener('change', update);
    reducedMotion.addEventListener('change', update);
    return () => {
      device.removeEventListener('change', update);
      reducedMotion.removeEventListener('change', update);
    };
  }, []);

  const draw = useCallback(time => {
    const data = contextRef.current;
    if (!data) return;
    const { gl, program, texture, position, pointer, clock, aspect } = data;
    const canvas = gl.canvas;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, position);
    const attribute = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(attribute);
    gl.vertexAttribPointer(attribute, 2, gl.FLOAT, false, 0, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(gl.getUniformLocation(program, 'uTexture'), 0);
    gl.uniform2f(pointer, pointerRef.current.x, pointerRef.current.y);
    gl.uniform1f(clock, time * 0.001);
    gl.uniform1f(aspect, canvas.width / Math.max(1, canvas.height));
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }, []);

  useEffect(() => {
    if (!active || !supported) return undefined;
    const canvas = canvasRef.current;
    const surface = surfaceRef.current;
    if (!canvas || !surface) return undefined;
    const gl = canvas.getContext('webgl', {
      alpha: false, antialias: false, powerPreference: 'low-power',
      preserveDrawingBuffer: false,
    });
    if (!gl) {
      setSupported(false);
      return undefined;
    }
    const vertex = compile(gl, gl.VERTEX_SHADER, vertexShader);
    const fragment = compile(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) {
      setSupported(false);
      return undefined;
    }
    const program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      setSupported(false);
      return undefined;
    }
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    const resize = () => {
      const box = surface.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.max(1, Math.floor(box.width * ratio));
      canvas.height = Math.max(1, Math.floor(box.height * ratio));
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(surface);
    let disposed = false;
    let ready = false;
    const image = new window.Image();
    image.decoding = 'async';
    image.onload = () => {
      if (disposed) return;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      ready = true;
    };
    image.onerror = () => {
      if (!disposed) setSupported(false);
    };
    image.src = src;

    contextRef.current = {
      gl, program, texture, position: buffer,
      pointer: gl.getUniformLocation(program, 'uPointer'),
      clock: gl.getUniformLocation(program, 'uTime'),
      aspect: gl.getUniformLocation(program, 'uAspect'),
    };
    let previousFrame = 0;
    const render = time => {
      if (disposed) return;
      if (ready && time - previousFrame >= 28) {
        previousFrame = time;
        draw(time);
      }
      loopRef.current = requestAnimationFrame(render);
    };
    loopRef.current = requestAnimationFrame(render);
    return () => {
      disposed = true;
      cancelAnimationFrame(loopRef.current);
      observer.disconnect();
      contextRef.current = null;
      gl.deleteBuffer(buffer);
      gl.deleteTexture(texture);
      gl.deleteProgram(program);
    };
  }, [active, supported, src, draw]);

  const handleMove = event => {
    if (event.pointerType !== 'mouse') return;
    const box = surfaceRef.current?.getBoundingClientRect();
    if (!box) return;
    pointerRef.current = {
      x: (event.clientX - box.left) / Math.max(1, box.width),
      y: (event.clientY - box.top) / Math.max(1, box.height),
    };
  };

  return (
    <div
      ref={surfaceRef}
      className='relative size-full overflow-hidden'
      onPointerEnter={event => {
        if (event.pointerType === 'mouse' && supported) {
          handleMove(event);
          setActive(true);
        }
      }}
      onPointerMove={handleMove}
      onPointerLeave={() => setActive(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={960}
        unoptimized
        priority={priority}
        className='size-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.045] motion-safe:group-active:scale-[1.018]'
      />
      {active && supported && (
        <canvas ref={canvasRef} aria-hidden='true' className='pointer-events-none absolute inset-0 size-full opacity-90' />
      )}
      <div aria-hidden='true' className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_25%,rgba(216,255,103,.07),transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-70' />
    </div>
  );
}
