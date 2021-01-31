import React from 'react'
import { render } from '@testing-library/react'
import { CustomHeader } from '../../../components'

describe('Testes de Snapshot da Header', () => {

  test('Renderização do componente Header', () => {
    const { asFragment } = render(<CustomHeader />)

    expect(asFragment(<CustomHeader />)).toMatchSnapshot()
  })

}) 