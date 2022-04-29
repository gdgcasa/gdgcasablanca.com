import { CalendarToday, PinDrop } from '@mui/icons-material'

import Link from '../../../../components/link'

export default function PastEvent({ title, date, eventLink, location, style }) {
  const infoItems = [
    !date ? null : { label: date, Icon: CalendarToday },
    !location ? null : { label: location, Icon: PinDrop },
  ].filter(Boolean)

  return (
    <div
      className='flex flex-col justify-between gap-4 rounded-xl border-2 border-slate-100 p-4 transition-none hover:border-glue-100 sm:flex-row sm:items-center'
      style={style}
    >
      <div className='flex flex-col gap-2'>
        <h3 className=''>{title}</h3>

        <ul className='flex flex-col text-slate-600 sm:flex-row md:gap-2'>
          {infoItems.map((data, index) => {
            return <InfoItem {...data} key={index} />
          })}
        </ul>
      </div>
      <Link
        href={eventLink}
        external
        className='self-start underline-offset-4 outline-offset-2 hover:underline focus-visible:underline sm:self-auto'
      >
        Check Event Page
      </Link>
    </div>
  )
}

function InfoItem({ Icon, label }) {
  return (
    <li className='flex items-center gap-2'>
      <span className='flex text-sm opacity-80'>
        <Icon style={{ fontSize: 'inherit' }} />
      </span>
      <span>{label}</span>
    </li>
  )
}
