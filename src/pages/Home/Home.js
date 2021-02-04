import React, { useState } from "react"
import api from '../../services/api'
import { Error, Loading, Button, Card } from '../../components'
import './Home.css'

export default function Home() {
  const [userInput, setUserInput] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    name: "Example",
    login: "username",
    location: "location",
    followers: "0",
    following: "0",
    public_repos: "0",
    avatar_url: 'https://avatars.githubusercontent.com/u/57936?v=4'
  })

  const handleSetData = ({ name, login, followers, following, public_repos, avatar_url, location }) => {
    setData({
      ...data,
      name: name,
      login: login,
      location: location,
      followers: followers,
      following: following,
      public_repos: public_repos,
      avatar_url: avatar_url
    })
    setUserInput('')
    setLoading(false)
  }

  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    await api.get(`https://api.github.com/users/${userInput}`)
      .then(res => {
        handleSetData(res.data)
      })
      .catch(err => {
        setError('Ops, usuário não encontrado!')
        setLoading(false)
      })
  }

  return (
    <>
      <div className="search">
        <form className="form" data-testid="search-form" onSubmit={handleSearchSubmit}>
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
          <Button >Search</Button>
        </form>
      </div>

      {loading
        ? <Loading />
        : error
          ? <Error error={error} />
          : <Card data={data} />
      }
    </>
  )
}