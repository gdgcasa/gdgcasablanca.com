import NextLink from 'next/link'

export default function Link({ href, children, className, external }) {
  if (external) {
    return (
      <a href={href} target='_blank' rel='noreferrer' className={className}>
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}
