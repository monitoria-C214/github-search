import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '../../../components'

describe('Testes de Snapshot da Button', () => {

  test('Renderização do componente Button', () => {
    const { asFragment } = render(<Button />)

    expect(asFragment(<Button />)).toMatchSnapshot()
  })

}) 