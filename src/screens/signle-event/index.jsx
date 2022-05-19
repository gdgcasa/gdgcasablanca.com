import { BaseSection } from '../../components/base-section'
import { SectionHeading } from '../../components/section-heading'
import TeamMember from '../../components/team-member'

export default function SingleEventScreen({ members }) {
  return (
    <main>
      <BaseSection>
        <SectionHeading sup={'Oct 29, 2022'}>
          DevFest Casablanca 2022
        </SectionHeading>

        <h4 className='mt-14 text-2xl text-slate-800'>Organizers</h4>
        <div className='grid gap-6 self-stretch md:grid-cols-4'>
          {members.map((member) => {
            return <TeamMember key={member.id} {...member} />
          })}
        </div>
      </BaseSection>
    </main>
  )
}
