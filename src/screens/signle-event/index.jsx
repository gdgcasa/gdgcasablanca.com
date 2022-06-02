import { BaseSection } from '../../components/base-section'
import { SectionHeading } from '../../components/section-heading'
import TeamMember from '../../components/team-member'

export default function SingleEventScreen({ event }) {
  const { title, organizers, date } = event ?? {}

  return (
    <main>
      <BaseSection>
        <SectionHeading sup={date}>{title}</SectionHeading>

        <h4 className='mt-14 text-2xl text-slate-800'>Organizers</h4>
        <div className='grid gap-6 self-stretch md:grid-cols-4'>
          {(organizers ?? []).map((member) => {
            return <TeamMember key={member.id} {...member} />
          })}
        </div>
      </BaseSection>
    </main>
  )
}
