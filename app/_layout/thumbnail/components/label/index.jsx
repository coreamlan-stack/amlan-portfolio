/** @param {import('react').PropsWithChildren<unknown>} */
export function ThumbnailLabel({ children }) {
  return (
    <div
      style={{
        paddingInlineStart: 'clamp(2.5em, 8vw, 8em)',
      }}
    >
      <h5 className='text-xs uppercase tracking-[0.18em] text-muted-foreground'>
        {children}
      </h5>
    </div>
  );
}
