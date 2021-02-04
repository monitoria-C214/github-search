import React from "react"
import './Card.css'

export default function Card({ data }) {

  return (
    <div className="card">
      <div data-testid="card-user" className="card-user">
        <div className="card-image">
          <img
            data-testid="card-avatar"
            src={data.avatar_url}
            alt="User Avatar"
          />
        </div>

        <div className="card-content">
          {data.name && <h1 data-testid="card-name" className="card-name">{data.name}</h1>}
          <span className="card-username">
            <i className="fas fa-user" />
            <span data-testid="card-username">{data.login}</span>
          </span>
          {data.location && <span className="card-location">
            <i className="fas fa-map-marker-alt" />
            <span data-testid="card-location">{data.location}</span>
          </span>}

          <div className="card-data">
            <span>
              <i className="fas fa-user-friends" />
              <span data-testid="card-following" >{data.following}</span>following
                  </span>
            <span>
              <i className="fas fa-user-friends" />
              <span data-testid="card-followers">{data.followers}</span>followers
                  </span>
            <span>
              <i className="fas fa-poll-h" />
              <span data-testid="card-repos">{data.public_repos}</span>repos
            </span>
          </div>

          <div className="card-footer">
            <a href={`https://github.com/${data.login}`} >
              <span>GitHub {data.login}</span>
            </a>

          </div>

        </div>
      </div>
    </div>
  )
}