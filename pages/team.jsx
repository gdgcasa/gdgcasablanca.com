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
  const members = await fetch(
    'https://gdgcasablanca-admin.vercel.app/api/members/published',
  ).then((d) => d.json())

  return {
    props: { members },
  }
}
