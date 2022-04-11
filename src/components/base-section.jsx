import cx from 'classnames'

export function BaseSection({
  as,
  children,
  id,
  className,
  containerClassName,
  noLayout = false,
  highlight = false,
  centered = true,
}) {
  const Comp = as || 'section'

  return (
    <Comp
      id={id}
      className={cx(
        'min-h-[80vh]',
        {
          'bg-gradient-to-b from-slate-50/90 to-slate-50': highlight,
          'even:bg-gradient-to-b even:from-slate-50/90 even:to-slate-50':
            !highlight,
          'flex flex-col justify-center': centered,
        },
        className,
      )}
    >
      <div
        className={cx(
          'mx-auto w-full max-w-5xl px-4 py-24 lg:px-0',
          { 'flex flex-col items-start gap-6': !noLayout },
          containerClassName,
        )}
      >
        {children}
      </div>
    </Comp>
  )
}
