import React from 'react'

export default function NoMatch({ location }) {
  return (
    <div>
        <h1>
            <span role="img" aria-label="shrug">&#x1F937;</span> No match for <code>{location.pathname}</code> route
            <br />
            Let us guide you <a href="/">back</a>
        </h1>
    </div>
  )
}
