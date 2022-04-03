import React from 'react'

import Event from './cards/event'
import NoResult from './cards/no-result'

export default function Events({ events, pastEvents }) {
  if (!events || events.length <= 0) {
    return <NoResult />
  }

  return (
    <EventsWrapper>
      {pastEvents.map((event) => {
        return <Event {...event} key={event.id} />
      })}
    </EventsWrapper>
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
