const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export function formatDate(date) {
  const eventDate = new Date(date)

  const year = eventDate.getFullYear()
  const month = months[eventDate.getMonth()]
  const day = eventDate.getDate()

  return `${month} ${day}, ${year}`
}

export function formatEvent(eventData) {
  const {
    local_date: localDate,
    name: title,
    link: eventLink,
    local_time: timeFrom,
    venue,
    id,
  } = eventData

  console.log({ eventData })

  const date = formatDate(localDate)

  const entries = []
  if (venue) {
    if (venue.name) {
      entries.push(venue.name)
    }
    if (venue.city) {
      entries.push(venue.city)
    }
  }

  const location = venue ? entries.join(', ') : 'Soon ...'

  const event = {
    id,
    title,
    date,
    eventLink,
    timeFrom,
    location,
  }

  return event
}
