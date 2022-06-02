import cx from 'classnames'
import Link from 'next/link'

export default function NavLink({ href, children, className, role }) {
  return (
    <Link href={href}>
      <a
        className={cx(
          'px-3 py-2 text-sm font-semibold uppercase text-slate-500 focus-visible:bg-slate-50 focus-visible:outline-offset-4 focus-visible:outline-slate-200 active:bg-slate-100 md:p-1',
          className,
        )}
        role={role}
      >
        {children}
      </a>
    </Link>
  )
}
