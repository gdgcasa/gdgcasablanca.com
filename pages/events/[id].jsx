import { useRouter } from 'next/router'

import DefaultPageHead from '../../src/components/default-page-head'
import Header from '../../src/components/header'
import { PageFooter } from '../../src/components/page-footer'
import SingleEventScreen from '../../src/screens/signle-event'

export default function SingleEvent({ members }) {
  const { query } = useRouter()
  const { id } = query

  return (
    <div>
      <DefaultPageHead title='Event' />

      <Header />

      <SingleEventScreen id={id} members={members} />

      <PageFooter />
    </div>
  )
}

export async function getStaticProps() {
  const members = await fetch(
    'https://gdgcasablanca-admin.vercel.app/api/members/published',
  ).then((d) => d.json())

  return {
    props: { id: '1', members },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: false,
  }
}
