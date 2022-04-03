import { CalendarToday, AccessTime, PinDrop } from '@mui/icons-material'

import Link from '../../../../components/link'

export default function Event({
  title,
  date,
  eventLink,
  timeFrom,
  // timeTo,
  location,
}) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {date && (
          <li>
            <CalendarToday />
            {date}
          </li>
        )}
        {timeFrom && (
          <li>
            <AccessTime />
            {`Event starts at ${timeFrom}`}
          </li>
        )}
        {location && (
          <li>
            <PinDrop />
            {location}
          </li>
        )}
      </ul>
      <Link href={eventLink} external className=''>
        Check Event Page
      </Link>
    </div>
  )
}
