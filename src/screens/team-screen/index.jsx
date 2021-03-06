import { BaseSection } from '../../components/base-section'
import { SectionHeading } from '../../components/section-heading'
import TeamMember from '../../components/team-member'

export default function TeamScreen({ members }) {
  return (
    <main>
      <BaseSection>
        <SectionHeading>Team.</SectionHeading>

        <div className='grid gap-6 self-stretch md:grid-cols-4'>
          {members.map((member) => {
            return <TeamMember key={member.id} {...member} />
          })}
        </div>
      </BaseSection>
    </main>
  )
}
