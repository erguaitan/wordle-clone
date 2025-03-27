import React from 'react'

const RetryIcon = ({size="s-24"}) => {
  const theme = localStorage.getItem("theme");
  let color;
  if (theme) {
    if (theme == "dark") {
      color = "#1a1a1a"
    } else {
      color = "#fff"
    }
  } else {
    color = "#fff"
  }

  return (
    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke={color}  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className={`${size} icon icon-tabler icons-tabler-outline icon-tabler-refresh`}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>
  )
}

export default RetryIcon
