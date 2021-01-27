import React, { useState } from "react"
import api from '../../services/api'
import { Error, Loading } from '../../components'
import './Home.css'

export default function Home() {
  const [userInput, setUserInput] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    name: "Example",
    username: "username",
    location: "location",
    followers: "0",
    following: "0",
    repos: "0",
    avatar: 'https://avatars.githubusercontent.com/u/57936?v=4'
  })  

  const handleSetData = ({ name, login, followers, following, public_repos, avatar_url, location }) => {
    setData({
      ...data,
      name: name,
      username: login,
      location: location,
      followers: followers,
      following: following,
      repos: public_repos,
      avatar: avatar_url
    })
    setUserInput('')
    setLoading(false)
  }

  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await api.get(`https://api.github.com/users/${userInput}`)
      if (response.status === 200) handleSetData(response.data)
    } catch (error) {
      setError('Ops, usuário não encontrado!')
      setLoading(false)
    }
  }

  return (
    <>
      <div className="search">
        <form className="form" onSubmit={handleSearchSubmit}>
          <input
            data-testid="search-input"
            className='input'
            type='text'
            name="github-user"
            placeholder="Github username..."
            value={userInput}
            onChange={({ target }) => setUserInput(target.value)
            }
          />
          <button className="button">Search</button>
        </form>
      </div>

      {loading
        ? <Loading />
        : error
          ? <Error error={error} />
          : <div className="card">
            <div data-testid="card-user" className="card-user">
              <div className="card-image">
                <img
                  src={data.avatar}
                  alt="User Avatar"
                />
              </div>

              <div className="card-content">
                {data.name && <h1 className="card-name">{data.name}</h1>}
                <span className="card-username">
                  <i className="fas fa-user" />
                  <span data-testid="card-username">{data.username}</span>
                </span>
                {data.location && <span className="card-location">
                  <i className="fas fa-map-marker-alt" />{data.location}
                </span>}

                <div className="card-data">
                  <span>
                    <i className="fas fa-user-friends" />{data.following} following
              </span>
                  <span>
                    <i className="fas fa-user-friends" />{data.followers} followers
              </span>
                  <span>
                    <i className="fas fa-poll-h" />{data.repos} repos
              </span>
                </div>

                <div className="card-footer">
                  <a href={`https://github.com/${data.username}`} >
                    <span>GitHub {data.username}</span>
                  </a>

                </div>

              </div>
            </div>
          </div>
      }
    </>
  )
}