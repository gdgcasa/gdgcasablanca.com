import Image from 'next/image'
import { BaseSection } from './base-section'
import { footerLinks } from '../screens/home-screen/index'
import { SectionHeading } from './section-heading'

export function PageFooter() {
  return (
    <BaseSection as='footer' highlight>
      <SectionHeading sup='Developer community'>
        {['GDG ', 'Casablanca', '.']}
      </SectionHeading>
      <div className='grid gap-y-8 self-stretch py-12 md:grid-cols-3'>
        {footerLinks.map(({ title, links }, index) => {
          return (
            <div key={index}>
              <h4 className='mb-3 px-2 text-slate-500'>{title}</h4>
              <ul className='flex flex-col gap-2'>
                {links.map(({ link, label }, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={link}
                        target='_blank'
                        rel='noreferrer'
                        className='px-2 py-1 transition-colors hover:text-glue-500'
                      >
                        {label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
      <div className='flex flex-wrap justify-center gap-10 self-stretch border-t border-slate-200 py-6 md:justify-between'>
        <Image
          src='/logo-gdg.svg'
          alt='GDG Casablanca'
          width={192}
          height={22}
        />
        <div className='text-center text-sm text-gray-500 md:text-right'>
          With ❤️ by the GDG Casablanca Team | Code Hosted on Github
        </div>
      </div>
    </BaseSection>
  )
}
