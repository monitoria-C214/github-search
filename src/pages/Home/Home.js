import React, { useState, useEffect } from "react"
import './Home.css'

export default function Home() {
  const [data, setData] = useState({
    name: '',
    username: '',
    location: '',
    followers: '',
    following: '',
    repos: '',
    avatar: ''
  })

  const [userInput, setUserInput] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("https://api.github.com/users/example")
      .then(res => res.json())
      .then(data => {
        handleSetData(data)
        setError(null)
      })
  }, [])

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

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError('Ops, usuário não encontrado!')
          setLoading(false)
        }
        else {
          handleSetData(data)
          setError('')
        }
      })
  }

  return (
    <div>
      <div className="navbar">
        <i className="fab fa-github"></i>
        <span>GitHub Search</span>
      </div>

      <div className="search">
        <form className="form" onSubmit={userInput && handleSearchSubmit}>
          <input
            className='input'
            type='text'
            name="github-user"
            placeholder="Github username ..."
            value={userInput}
            onChange={({ target }) => setUserInput(target.value)}
          />
          <button className="button">Search</button>
        </form>
      </div>

      {loading
        ? <div className="card-loading">
          <i class="fas fa-spinner" />
          <span>Carregando ....</span>
        </div>
        : error
          ? <div className="card-error">
            <i className="fas fa-exclamation-triangle" />
            <span>{error}</span>
          </div>
          : <div className="card">
            <div className="card-user">
              <div className="card-image">
                <img
                  src={data.avatar}
                  alt="User Avatar"
                />
              </div>

              <div className="card-content">
                {data.name && <h1 className="card-name">{data.name}</h1>}
                <span className="card-username">
                  <i class="fas fa-user" />{data.username}
                </span>
                {data.location && <span className="card-location">
                  <i class="fas fa-map-marker-alt" />{data.location}
                </span>}

                <div className="card-data">
                  <span>
                    <i class="fas fa-user-friends" />{data.following} following
                </span>
                  <span>
                    <i class="fas fa-user-friends" />{data.followers} followers
                </span>
                  <span>
                    <i class="fas fa-poll-h" />{data.repos} repos
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


      <div className="footer">
        <span>Created by VSwerts</span>

        <div className="contact">
          <a href="https://github.com/VanessaSwerts" >
            <i className="fab fa-github-square" />
          </a>

          <a href="https://www.linkedin.com/in/vanessaswerts/" >
            <i className="fab fa-linkedin" />
          </a>

        </div>
      </div>
    </div>
  )
}