import { useRouter } from 'next/router'

import DefaultPageHead from '../../src/components/default-page-head'
import Header from '../../src/components/header'
import { PageFooter } from '../../src/components/page-footer'
import SingleEventScreen from '../../src/screens/signle-event'

export default function SingleEvent({ event }) {
  const { query } = useRouter()
  const { id } = query

  return (
    <div>
      <DefaultPageHead title='Event' />

      <Header />

      <SingleEventScreen id={id} event={event} />

      <PageFooter />
    </div>
  )
}

const base = process.env.NEXT_PUBLIC_BE_BASE

export async function getStaticProps({ params }) {
  const { id } = params

  const url = `${base}/event/${id}`
  const event = await fetch(url, {
    headers: { generating: process.env.SECRECT_GEN_KEY },
  }).then((d) => d.json())

  return {
    props: { id, event },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const url = `${base}/events`
  const {
    data: { dbEvents },
  } = await fetch(url, {
    headers: { generating: process.env.SECRECT_GEN_KEY },
  }).then((d) => d.json())

  const paths = dbEvents.map((event) => ({ params: { id: event.id } }))

  return { paths: paths, fallback: false }
}
