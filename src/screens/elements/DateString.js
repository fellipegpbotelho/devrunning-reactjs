import React from 'react'
import moment from 'moment-timezone'

const DateString = ({ date, timezone }) => {

  const date1 = moment.tz(date, "GMT")
  const date2 = date1.clone().tz(timezone)

  return <span>{date2.format("DD/MM/YYYY H:mm:ss")}</span>
}
 
export default DateString