import React from 'react'
import { render } from '@testing-library/react'
import { Error } from '../../../components'

describe('Testes de Snapshot da Error', () => {

  test('Renderização da tela Error', () => {
    const { asFragment } = render(<Error error="Teste mensagem de erro!" />)

    expect(asFragment(<Error />)).toMatchSnapshot()
  })

}) 