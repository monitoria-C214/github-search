import React from 'react'
import { Home } from '../../../pages'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Teste Unitário da Home', () => {

  it('Campo search é vazio ao iniciar o site', () => {
    render(<Home />)

    const input = screen.getByTestId('search-input')
    expect(input.value).toBe('')
  })

  it("Deve alterar o valor do input para VanessaSwerts", () => {
    render(<Home />)

    const input = screen.getByPlaceholderText("Github username...")
    fireEvent.change(input, { target: { value: 'VanessaSwerts' } })

    expect(input.value).toBe('VanessaSwerts')
  })

  it("Quando abrir o site, deve renderizar o card examplo", () => {
    const { getByTestId } = render(<Home />)

    const card = getByTestId('card-user')
    expect(card).toBeInTheDocument()
  })

  it("Quando abrir o site, deve renderizar o card examplo com o dados corretos", () => {
    render(<Home />)

    const user = {
      name: "Example",
      username: "username",
      location: "location",
      followers: "0",
      following: "0",
      repos: "0",
      avatar: 'https://avatars.githubusercontent.com/u/57936?v=4'
    }

    const avatar = screen.getByTestId('card-avatar')
    const name = screen.getByTestId('card-name')
    const username = screen.getByTestId('card-username')
    const location = screen.getByTestId('card-location')
    const following = screen.getByTestId('card-following')
    const followers = screen.getByTestId('card-followers')
    const repos = screen.getByTestId('card-repos')

    const userTest = {
      name: name.textContent,
      username: username.textContent,
      location: location.textContent,
      followers: following.textContent,
      following: followers.textContent,
      repos: repos.textContent,
      avatar: avatar.src
    }

    expect(userTest).toEqual(user)

    // expect(avatar).toHaveAttribute("src", "https://avatars.githubusercontent.com/u/57936?v=4")
    // expect(name.textContent).toBe("Example")
    // expect(username).toHaveTextContent('username')
    // expect(location).toHaveTextContent('location')
    // expect(following).toHaveTextContent('0')
    // expect(followers).toHaveTextContent('0')
    // expect(repos).toHaveTextContent('0')
  })

})