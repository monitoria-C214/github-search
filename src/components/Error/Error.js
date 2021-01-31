import React from "react"
import './Error.css'

export default function Error({error}) {

  return (
    <div className="card-error">
      <i className="fas fa-exclamation-triangle" />
      <span data-testid="message-error">{error}</span>
    </div>
  )
}