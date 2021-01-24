import React, { useState, useEffect } from "react"
import './Home.css'

export default function Home() {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [location, setLocation] = useState('')
  const [followers, setFollowers] = useState('')
  const [following, setFollowing] = useState('')
  const [repos, setRepos] = useState('')
  const [avatar, setAvatar] = useState('')

  const [userInput, setUserInput] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then(res => res.json())
      .then(data => {
        handleSetData(data)
        setError(null)
      })
  }, [])

  const handleSetData = ({ name, login, followers, following, public_repos, avatar_url, location }) => {
    setName(name)
    setUsername(login)
    setFollowers(followers)
    setFollowing(following)
    setRepos(public_repos)
    setAvatar(avatar_url)
    setLocation(location)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()

    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) setError('Usuário não encontrado!')
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
        <form className="form" onSubmit={handleSearchSubmit}>
          <input
            className='input'
            type='text'
            name="github-user"
            placeholder="GitHub user"
            value={userInput}
            onChange={({ target }) => setUserInput(target.value)}
          />
          <button className="button">Search</button>
        </form>
      </div>

      {error ? <div>{error}</div>
        : <div className="card">
          <div className="card-user">
            <div className="card-image">
              <img
                src={avatar}
                alt="User Avatar"
              />
            </div>

            <div className="card-content">
              <h1 className="card-name">{name}</h1>
              <span className="card-username">
                <i class="fas fa-user" />{username}
              </span>
              <span className="card-location">
                <i class="fas fa-map-marker-alt" />{location}
              </span>

              <div className="card-data">
                <span>
                  <i class="fas fa-user-friends" />{following} following
                </span>
                <span>
                  <i class="fas fa-user-friends" />{followers}  followers
                </span>
                <span>
                  <i class="fas fa-poll-h" />{repos} repos
                </span>
              </div>

              <div className="card-footer">
                <a href={`https://github.com/${username}`} >
                  <span>GitHub {username}</span>
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