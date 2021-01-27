import React from 'react'
import { Home } from '../../../pages'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

describe('Teste Unitário da Home', () => {

  it('Campo search é vazio ao iniciar o site', () => {
    render(<Home />)

    const input = screen.getByTestId('search-input')
    expect(input.value).toBe('')
  })

  it("Deve alterar o input value para VanessaSwerts", () => {
    render(<Home />)

    const input = screen.getByPlaceholderText("Github username...")
    fireEvent.change(input, {target: {value: 'VanessaSwerts'}})

    expect(input.value).toBe('VanessaSwerts')
  })
  
  it("Ao abrir o site, renderiza mensagem 'Carregando...' ", async () => {
    render(<Home />)

    const loading = await screen.findByText('Carregando ...')
    expect(loading).toBeInTheDocument()
    // expect(loading.textContent).toEqual('Carregando ...')
    // expect(loading).toHaveTextContent('Carregando ...')
  })

})