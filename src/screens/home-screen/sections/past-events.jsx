import Link from '../../../components/link'
import PastEvent from './cards/past-event'

export default function PastEvents({ pastEvents }) {
  return (
    <div className='flex w-full flex-col gap-3 pt-4'>
      <h4 className='text-xl'>Past events.</h4>
      <div className='divide-y-2 divide-slate-200'>
        {pastEvents.map((event) => {
          return <PastEvent {...event} key={event.id} />
        })}
      </div>

      <Link
        href='https://www.meetup.com/GDGCasablanca/events/past/'
        external
        className='self-start'
      >
        See All Past Events
      </Link>
    </div>
  )
}
