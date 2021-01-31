import React from "react"
import './Loading.css'

export default function Loading() {

  return (
    <div className="card-loading">
      <i className="fas fa-spinner" />
      <span data-testid='message-loading'>Carregando...</span>
    </div>
  )
}