import DefaultPageHead from '../src/components/default-page-head'
import Header from '../src/components/header'
import HomeScreen from '../src/screens/home-screen'
import { formatEvent } from '../src/utils'

export default function Home({ events, pastEvents }) {
  return (
    <div>
      <DefaultPageHead />

      <Header />

      <HomeScreen events={events} pastEvents={pastEvents} />
    </div>
  )
}

const MEETUP_ENDPOINT =
  'https://api.meetup.com/gdgcasablanca/events?&photo-host=public&page=20'
const PAST_MEETUP_ENDPOINT =
  'https://api.meetup.com/gdgcasablanca/events?&photo-host=public&page=3&status=past'

export async function getStaticProps() {
  const eventsData = await fetch(MEETUP_ENDPOINT).then((d) => d.json())
  const pastEventsData = await fetch(PAST_MEETUP_ENDPOINT).then((d) => d.json())

  const events = eventsData.map(formatEvent)
  const pastEvents = pastEventsData.map(formatEvent)

  return {
    props: { events, pastEvents },
  }
}
