import { Fragment } from 'react'

import { BaseSection } from '../../components/base-section'
import Link from '../../components/link'
import { PageFooter } from '../../components/page-footer'
import { SectionHeading } from '../../components/section-heading'
import Events from './sections/events'
import PastEvents from './sections/past-events'

const twLinks = [
  'GDGCasablanca',
  'WTMCasablanca',
  'GDG',
  'GDGMena',
  'WTM',
  'WTMMena',
]

export default function HomeScreen({ events, pastEvents }) {
  return (
    <>
      <main className='text-slate-800'>
        <IntroSection />
        <AllEvents events={events} pastEvents={pastEvents} />
        <Contacts />
      </main>
      <PageFooter />
    </>
  )
}

function IntroSection() {
  return (
    <BaseSection id='home'>
      <SectionHeading>{['Be a hero. Be a  ', 'GDG', '.']}</SectionHeading>
      <p className='max-w-prose	leading-relaxed text-slate-500'>
        Welcome to GDG Casablanca. Google Developer Groups of Casablanca City is
        for developers who are interested in Google&apos;s developer technology,
        everything from Android, App Engine, and Google Chrome platforms, to
        product APIs like the Maps API, YouTube API and Google Calendar API.
      </p>
      <p className='-ml-1 flex flex-wrap gap-x-2 gap-y-1'>
        <HashtagList labels={twLinks} />
      </p>
      <div className='flex gap-4'>
        <Link
          href='https://gdg.community.dev/gdg-casablanca/'
          external
          btnStyles={{ uppercase: true }}
        >
          Join the community
        </Link>
        <Link
          href='https://www.meetup.com/GDGCasablanca/'
          external
          btnStyles={{ outline: true, uppercase: true }}
        >
          Meetup page
        </Link>
      </div>
    </BaseSection>
  )
}
function AllEvents({ events, pastEvents }) {
  return (
    <BaseSection id='events'>
      <SectionHeading>{['Upcoming ', 'Events', '.']}</SectionHeading>

      <Events events={events} />

      <CallToJoin />

      <PastEvents pastEvents={pastEvents} />
    </BaseSection>
  )
}

function CallToJoin() {
  return (
    <div className='flex w-full items-center justify-center gap-8 rounded bg-glue-100 px-4 py-6'>
      <p>
        Join <span title='Meetup and GDG Community members'>+6000</span> members
        of the community,
        <br />
        and be the <span className='text-glue-500'>first</span> to get future
        event updates.
      </p>
      <Link href='https://gdg.community.dev/gdg-casablanca/' external btnStyles>
        Join Now
      </Link>
    </div>
  )
}

function Contacts() {
  return (
    <BaseSection id='contact'>
      <SectionHeading>Contacts.</SectionHeading>
      <p>
        Contact us via email:{' '}
        <a
          href='mailto:contact@gdgcasablanca.com'
          className='rounded px-0.5 text-glue-500 transition-colors hover:bg-glue-50 hover:text-glue-700'
          target='_blank'
          rel='noreferrer'
        >
          contact@gdgcasablanca.com
        </a>
      </p>
    </BaseSection>
  )
}

export const footerLinks = [
  {
    title: 'Learn More',
    links: [
      {
        label: 'Community Guidelines',
        link: 'https://developers.google.com/community-guidelines',
      },
      {
        label: 'Google Developers Group',
        link: 'https://developers.google.com/community/gdg',
      },
      {
        label: 'WTM Casablanca',
        link: 'https://wtm.gdgcasablanca.com/',
      },
      {
        label: 'Women Techmakers',
        link: 'https://www.womentechmakers.com/',
      },
    ],
  },
  {
    title: 'Social Media',
    links: [
      {
        link: 'https://twitter.com/gdgcasablanca',
        label: 'Twitter',
      },
      {
        link: 'https://www.facebook.com/GDGCasa/',
        label: 'Facebook',
      },
      {
        link: 'https://www.linkedin.com/company/gdgcasablanca/',
        label: 'LinkedIn',
      },
      {
        link: 'https://www.meetup.com/GDGCasablanca/',
        label: 'Meetup',
      },
    ],
  },
  {
    title: 'Partner & Sponsor',
    links: [
      {
        label: 'contact@gdgcasablanca.com',
        link: 'mailto:contact@gdgcasablanca.com',
      },
    ],
  },
]

export function MainHeading({ children }) {
  if (typeof children === 'string') {
    return children
  }

  if (Array.isArray(children)) {
    return children.map((child, index) => (
      <span key={index} className='even:text-glue-500'>
        {child}
      </span>
    ))
  }
  return null
}

function HashtagList({ labels }) {
  return labels.map((link, index) => (
    <Fragment key={index}>
      <TwHashtagLink label={link} />
    </Fragment>
  ))
}

function TwHashtagLink({ label }) {
  return (
    <a
      href={`https://twitter.com/hashtag/${label}`}
      target='_blank'
      rel='noreferrer'
      className='rounded px-1 py-0.5 transition-colors duration-75 hover:bg-slate-100'
    >
      #{label}
    </a>
  )
}
