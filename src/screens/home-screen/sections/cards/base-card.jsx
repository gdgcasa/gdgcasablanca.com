import cx from 'classnames'

export default function BaseCard({ children, className }) {
  return (
    <div
      className={cx(
        'min-h-[270px] w-full rounded-lg border border-slate-200 p-6',
        className,
      )}
    >
      {children}
    </div>
  )
}
