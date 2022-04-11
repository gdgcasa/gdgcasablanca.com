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
  'https://api.meetup.com/gdgcasablanca/events?&photo-host=public&page=5'
const PAST_MEETUP_ENDPOINT =
  'https://api.meetup.com/gdgcasablanca/events?&photo-host=public&status=past'

function getLatestEvents(events, nb = 3) {
  return events.sort((a, b) => b.time - a.time).slice(0, nb)
}

export async function getStaticProps() {
  const eventsData = await fetch(MEETUP_ENDPOINT).then((d) => d.json())
  const pastEventsData = await fetch(PAST_MEETUP_ENDPOINT).then((d) => d.json())

  const events = eventsData.map(formatEvent)
  const pastEvents = getLatestEvents(pastEventsData).map(formatEvent)

  return {
    props: { events, pastEvents },
  }
}
