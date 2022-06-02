import DefaultPageHead from '../src/components/default-page-head'
import Header from '../src/components/header'
import { PageFooter } from '../src/components/page-footer'
import TeamScreen from '../src/screens/team-screen'

export default function Team({ members }) {
  return (
    <div>
      <DefaultPageHead title='Team' />

      <Header />

      <TeamScreen members={members} />

      <PageFooter />
    </div>
  )
}

export async function getStaticProps() {
  const url = `${process.env.NEXT_PUBLIC_BE_BASE}/members/published`
  const members = await fetch(url).then((d) => d.json())

  return { props: { members }, revalidate: 10 }
}
