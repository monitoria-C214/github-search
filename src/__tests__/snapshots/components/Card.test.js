import React from 'react'
import { render } from '@testing-library/react'
import { Card } from '../../../components'

describe('Testes de Snapshot da Card', () => {

  test('Renderização do componente Card', () => {
    const user = {
      name: "Example",
      username: "username",
      location: "location",
      followers: "0",
      following: "0",
      repos: "0",
      avatar: 'https://avatars.githubusercontent.com/u/57936?v=4'
    }

    const { asFragment } = render(<Card data={user} />)

    expect(asFragment(<Card />)).toMatchSnapshot()
  })

}) 