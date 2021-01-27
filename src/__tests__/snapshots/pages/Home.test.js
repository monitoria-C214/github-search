import React from 'react'
import { create } from 'react-test-renderer'
import { Home } from '../../../pages'

describe('Testes de Snapshot da Home', () => {

  test('Renderização da tela Home', () => {
    const tree = create(<Home />)

    expect(tree.toJSON()).toMatchSnapshot()
  })
})