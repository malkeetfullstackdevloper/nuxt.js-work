import dayjs from 'dayjs'
import 'dayjs/locale/en'
import advanced from 'dayjs/plugin/advancedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.extend(advanced)
// Set the default timezone to PST
dayjs.tz.setDefault('America/Los_Angeles')

export default function useDateUtils() {
  // Format Unix date to a readable format
  const formatUnixDate = (unixDate: number | undefined): string => {
    if (unixDate) {
      return dayjs(unixDate * 1000)
        .tz('America/Los_Angeles')
        .format('YYYY-MM-DD hh:mm A z')
    }
    return ''
  }

  // Format date relative to the current time
  const formatRelativeDate = (unixDate: number | undefined): string => {
    if (unixDate) {
      const now = dayjs()
      const targetDate = dayjs(unixDate * 1000).tz('America/Los_Angeles')

      // Check if the date is today or tomorrow
      if (targetDate.isSame(now, 'day')) {
        return `Today at ${targetDate.format('hh:mm A')}`
      } else if (targetDate.isSame(now.add(1, 'day'), 'day')) {
        return `Tomorrow at ${targetDate.format('hh:mm A')}`
      } else {
        return targetDate.format('MMM DD, YYYY h:mm A z')
      }
    }
    return ''
  }

  // You can add more date utility functions as needed

  return {
    formatUnixDate,
    formatRelativeDate,
  }
}

// Define the type for the composable's return value
export type DateUtils = ReturnType<typeof useDateUtils>
