import React from 'react'
import { render } from '@testing-library/react'
import { CustomFooter } from '../../../components'

describe('Testes de Snapshot da Footer', () => {

  test('Renderização da tela Footer', () => {
    const { asFragment } = render(<CustomFooter />)

    expect(asFragment(<CustomFooter />)).toMatchSnapshot()
  })

}) 