import { BaseSection } from '../../src/components/base-section'
import DefaultPageHead from '../../src/components/default-page-head'
import Header from '../../src/components/header'
import Link from '../../src/components/link'
import { PageFooter } from '../../src/components/page-footer'
import { SectionHeading } from '../../src/components/section-heading'

export default function AllEvents({ eventData }) {
  const { dbEvents: events } = eventData?.data ?? {}
  return (
    <div>
      <DefaultPageHead title='Events' />

      <Header />

      <main>
        <BaseSection>
          <SectionHeading>Events</SectionHeading>

          <ul>
            {events?.map(({ title, id }) => {
              return (
                <li key={id}>
                  <Link href={`/events/${id}`}>{title}</Link>
                </li>
              )
            })}
          </ul>
        </BaseSection>
      </main>

      <PageFooter />
    </div>
  )
}

export async function getStaticProps() {
  const base = process.env.NEXT_PUBLIC_BE_BASE

  const url = `${base}/events`
  const eventData = await fetch(url, {
    headers: { generating: process.env.SECRECT_GEN_KEY },
  }).then((d) => d.json())

  return {
    props: { eventData },
    revalidate: 60,
  }
}
