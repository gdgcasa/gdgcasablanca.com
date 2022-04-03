import { CalendarToday, AccessTime, PinDrop } from '@mui/icons-material'

import Link from '../../../../components/link'
import BaseCard from './base-card'

export default function Event({
  title,
  date,
  eventLink,
  timeFrom,
  // timeTo,
  location,
}) {
  const infoItems = [
    !date ? null : { label: date, Icon: CalendarToday },
    !timeFrom
      ? null
      : { label: `Event starts at ${timeFrom}`, Icon: AccessTime },
    !location ? null : { label: location, Icon: PinDrop },
  ].filter(Boolean)

  return (
    <BaseCard className='flex flex-col items-start gap-4 bg-white transition-shadow hover:shadow-lg'>
      <h3 className='text-2xl'>{title}</h3>
      <ul className='flex flex-col gap-2 text-slate-600'>
        {infoItems.map((data, index) => {
          return <InfoItem {...data} key={index} />
        })}
      </ul>
      <Link href={eventLink} external className='mt-auto'>
        Check Event Page
      </Link>
    </BaseCard>
  )
}

function InfoItem({ Icon, label }) {
  return (
    <li className='flex items-center gap-2'>
      <Icon className='text-sm opacity-80' />
      <span>{label}</span>
    </li>
  )
}
