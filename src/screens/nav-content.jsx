import Image from 'next/image'
import React from 'react'
import NavLink from '../components/nav-link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#events', label: 'Events' },
  { href: '/#contact', label: 'Contact' },
  { href: '/team', label: 'Team' },
]

export default function NavContent() {
  return (
    <>
      <nav className='flex flex-col gap-y-1 gap-x-4 self-stretch md:flex-row md:items-center'>
        {navLinks.map(({ label, href }) => {
          return (
            <NavLink href={href} key={href}>
              {label}
            </NavLink>
          )
        })}
      </nav>
      <a
        href='https://wtm.gdgcasablanca.com/'
        target='_blank'
        rel='noreferrer'
        className='flex focus-visible:outline-slate-200'
      >
        <Image
          src='/logo-wtm.svg'
          alt='WTM Casablanca'
          width={188}
          height={50}
        />
      </a>
    </>
  )
}
