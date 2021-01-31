import React from 'react'
import { render } from '@testing-library/react'
import { Loading } from '../../../components'

describe('Testes de Snapshot da Loading', () => {

  test('Renderização do componente Loading', () => {
    const { asFragment } = render(<Loading />)

    expect(asFragment(<Loading />)).toMatchSnapshot()
  })

}) 