import cx from 'classnames'
import NextLink from 'next/link'
import { getBtnClasses } from './button'

function getLinkClasses() {
  return 'text-glue-500 hover:text-glue-700 transition-colors'
}

export default function Link({
  href,
  children,
  className,
  btnStyles,
  external,
}) {
  const classes = cx(
    { [getLinkClasses()]: !btnStyles, [getBtnClasses(btnStyles)]: btnStyles },
    className,
  )

  if (external) {
    return (
      <a href={href} target='_blank' rel='noreferrer' className={classes}>
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href}>
      <a className={classes}>{children}</a>
    </NextLink>
  )
}
