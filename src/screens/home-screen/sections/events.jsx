import React from 'react'
import { useEffect } from 'react'
import { getBtnClasses } from '../../../components/button'
import Link from '../../../components/link'

import Event from './cards/event'
import NoResult from './cards/no-result'

const MEETUP_ENDPOINT =
  'https://api.meetup.com/gdgcasablanca/events?&photo-host=public&page=20'
const PROXY_URL = 'https://oh-cors-anywhere.herokuapp.com/'
const MEETUP_DATA_ENDPOINT = PROXY_URL + MEETUP_ENDPOINT

const event = {
  title: 'GDG Casablanca',
  date: 'April 20, 2020',
  eventLink: 'https://www.meetup.com/GDGCasablanca/events/283940737/',
  timeFrom: '10:00 AM',
  location: 'Casablanca, Morocco',
}

export default function Events() {
  console.log({ event })
  useEffect(() => {
    fetch(MEETUP_DATA_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        console.log({ data })
      })
  }, [])

  return (
    <div
      className='grid self-stretch'
      style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))' }}
    >
      {/* <Event {...event} /> */}
      <NoResult />
    </div>
  )
}
