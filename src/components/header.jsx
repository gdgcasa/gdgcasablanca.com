import cx from 'classnames'
import Image from 'next/image'
import { useState, useRef, useEffect, useCallback } from 'react'

import NavContent from '../screens/nav-content'
import Menu from './icons/menu'
import X from './icons/x'
import NavLink from './nav-link'

export default function Header() {
  const mobileMenuRef = useRef()
  const [mobileMenuShown, setMobileMenuShown] = useState(false)

  function toggleMobileMenu() {
    setMobileMenuShown((mobileMenuShown) => !mobileMenuShown)
  }

  const handleClickOutside = useCallback(function handleClickOutside(event) {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setMobileMenuShown(false)
    }
  }, [])

  useEffect(() => {
    if (!mobileMenuRef.current) return

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <header
      className='sticky top-0 z-50 flex items-center border-b bg-white/90'
      style={{ height: 'var(--header-height)' }}
    >
      <div
        className='relative mx-auto flex max-w-5xl flex-grow flex-wrap items-center justify-between gap-4 p-2 md:py-1 lg:px-0'
        style={{ '--hm': '0.75rem' }}
      >
        <NavLink href='/' className='-ml-2.5 inline-flex md:-ml-1.5'>
          <Image
            src='/logo-gdg.svg'
            alt='GDG Casablanca'
            width={192}
            height={22}
          />
        </NavLink>
        <section className='hidden flex-grow flex-col items-start justify-between rounded-lg md:flex md:flex-row md:items-center'>
          <NavContent />
        </section>

        <section
          className={cx(
            'absolute top-0 left-0 m-[var(--hm)] flex w-[calc(100%-calc(2*var(--hm)))] flex-grow flex-col items-start justify-between rounded-lg border border-slate-300 bg-white p-4 shadow-md md:static md:hidden md:flex-row md:items-center',
            { hidden: !mobileMenuShown },
          )}
          ref={mobileMenuRef}
        >
          <button
            className='absolute top-2 right-2 rounded-full border border-current p-1.5 text-slate-400 hover:bg-slate-50 hover:text-slate-500 focus-visible:bg-slate-100 focus-visible:outline-offset-4 focus-visible:outline-slate-100 active:bg-slate-200 md:hidden'
            onClick={toggleMobileMenu}
          >
            <X className='h-5 w-5' />
          </button>

          <NavContent />
        </section>

        <button
          className='flex items-center gap-x-2 px-2 py-1.5 text-sm hover:bg-slate-50 focus-visible:bg-slate-100 focus-visible:outline-offset-4 focus-visible:outline-slate-100 active:bg-slate-200 md:hidden'
          onClick={toggleMobileMenu}
        >
          <Menu className='h-5 w-5' /> Menu
        </button>
      </div>
    </header>
  )
}
