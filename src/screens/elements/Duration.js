import React from 'react'

const Duration = ({ duration }) => {

  const pad = num => num.toString().padStart(2, "0")

  let durationString = ""

  const hour = Math.floor(duration / 3600)

  if (hour > 0) {
    durationString = pad(hour) + ":"
  }

  const minutes = Math.floor((duration - (hour * 3600)) / 60)
  durationString += pad(minutes)

  const seconds = duration - hour * 3600 - minutes * 60
  durationString += ":" + pad(seconds)

  return <span>{durationString}</span>
}

export default Duration