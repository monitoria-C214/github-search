import React from "react"
import './Button.css'

export default function Button({ onClick, children }) {

  return (
    <button
      className="button"
      data-testid="search-button"
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  )
}