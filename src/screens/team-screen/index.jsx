import Image from 'next/image'
import { BaseSection } from '../../components/base-section'
import { SectionHeading } from '../../components/section-heading'

export default function TeamScreen({ members }) {
  console.log({ members })
  return (
    <main>
      <BaseSection>
        <SectionHeading>Team.</SectionHeading>

        <div className='grid gap-6 self-stretch md:grid-cols-4'>
          {members.map(({ firstname, lastname, occupation, photo, id }) => {
            const fullName = `${firstname} ${lastname}`
            return (
              <div key={id} className='text-center'>
                <Image
                  src={photo}
                  width={165}
                  height={165}
                  alt={`A photo of ${fullName}`}
                  className='rounded-full'
                />
                <h3 className='text-2xl'>{fullName}</h3>
                <p>{occupation}</p>
              </div>
            )
          })}
        </div>
      </BaseSection>
    </main>
  )
}
