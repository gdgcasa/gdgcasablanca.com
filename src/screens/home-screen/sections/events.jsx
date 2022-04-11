import React from 'react'

import Link from '../../../components/link'
import Event from './cards/event'
import NoResult from './cards/no-result'

export default function Events({ events }) {
  if (!events || events.length <= 0) {
    return <NoResult />
  }

  return (
    <div className='flex w-full flex-col gap-4'>
      <EventsWrapper>
        {events.map((event) => {
          return <Event {...event} key={event.id} />
        })}
      </EventsWrapper>

      <Link
        href='https://www.meetup.com/GDGCasablanca/events/'
        external
        className='self-start'
      >
        See All Upcoming Events
      </Link>
    </div>
  )
}

function EventsWrapper({ children }) {
  return (
    <div
      className='grid gap-6 self-stretch'
      style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))' }}
    >
      {children}
    </div>
  )
}
