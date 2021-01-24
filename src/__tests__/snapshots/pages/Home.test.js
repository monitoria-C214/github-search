import React from 'react'
import { render } from '@testing-library/react'
import { Home } from '../../../pages'

describe('Testes de Snapshot da Home', () => {

  test('Renderização da tela Home', () => {
    const { asFragment } = render(<Home />)

    expect(asFragment(<Home />)).toMatchSnapshot()
  })

})