import React from 'react'
import { render } from '@testing-library/react'
import { Loading } from '../../../components'

describe('Testes de Snapshot da Loading', () => {

  test('Renderização da tela Loading', () => {
    const { asFragment } = render(<Loading />)

    expect(asFragment(<Loading />)).toMatchSnapshot()
  })

}) 