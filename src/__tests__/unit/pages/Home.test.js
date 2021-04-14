import React from 'react'
import { Home } from '../../../pages'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Vamos mockar a nossa API
import apiMock from '../../../services/api'
jest.mock('../../../services/api')

jest.useFakeTimers()

describe('Teste Unitário da Home', () => {

  it('Campo search é vazio ao iniciar o site', () => {
    render(<Home />)

    const input = screen.getByPlaceholderText("Github username...")
    // getByTestId('search-input')

    // expect(input.value).toBe('')
    expect(input).toHaveValue('')
  })

  it("Quando abrir o site, deve renderizar o card exemplo", () => {
    // Caso não queria usar o screen, podemos desestruturar aqui os métodos.
    const { getByTestId } = render(<Home />)

    const card = getByTestId('card-user')

    //Verifica se o componente está presente na renderização.
    expect(card).toBeInTheDocument()
  })

  it("Quando abrir o site, deve renderizar o card exemplo com o dados corretos", () => {
    render(<Home />)

    // Dados inicializados na aplicação!
    const user = {
      name: "Example",
      login: "username",
      location: "location",
      followers: "0",
      following: "0",
      public_repos: "0",
      avatar_url: 'https://avatars.githubusercontent.com/u/57936?v=4'
    }

    // Buscamos os componentes que queremos testar
    const avatar = screen.getByTestId('card-avatar')
    const name = screen.getByTestId('card-name')
    const login = screen.getByTestId('card-username')
    const location = screen.getByTestId('card-location')
    const following = screen.getByTestId('card-following')
    const followers = screen.getByTestId('card-followers')
    const repos = screen.getByTestId('card-repos')

    // Criamos um objeto com os valores iniciais dos componentes.
    const userTest = {
      name: name.textContent,
      login: login.textContent,
      location: location.textContent,
      followers: followers.textContent,
      following: following.textContent,
      public_repos: repos.textContent,
      avatar_url: avatar.src
    }

    //Conferimos se os valores do objetos são iguais.
    expect(userTest).toEqual(user)

    // Podemos testar cada valor individualmente, porém não é recomendado ter mais de um expect no teste!
    // expect(avatar).toHaveAttribute("src", "https://avatars.githubusercontent.com/u/57936?v=4")
    // expect(name.textContent).toBe("Example")
    // expect(login).toHaveTextContent('username')
    // expect(location).toHaveTextContent('location')
    // expect(following).toHaveTextContent('0')
    // expect(followers).toHaveTextContent('0')
    // expect(repos).toHaveTextContent('0')
  })

  it("Deve alterar o valor do input para VanessaSwerts", () => {
    render(<Home />)

    const input = screen.getByPlaceholderText("Github username...")

    //Podemos simular a mudança do value do Input usando o fireEvent
    // fireEvent.change(input, { target: { value: 'VanessaSwerts' } })

    // Mas é mais recomendado, utilizarmos o userEvent, pois simula uma ação do usuário com o componente!
    userEvent.type(input, "VanessaSwerts")

    expect(input).toHaveValue('VanessaSwerts')
    // expect(input.value).toBe('VanessaSwerts')
  })

  it('Ao pesquisar novo usuario, primeiramente mostra o Carregando ...', async () => {
    render(<Home />)

    // Objeto que esperamos retornar na promise
    const userSearch = {
      name: "Vanessa Swerts",
      login: "VanessaSwerts",
      location: "Minas Gerais - Brazil",
      followers: "51",
      following: "66",
      public_repos: "19",
      avatar_url: 'https://avatars.githubusercontent.com/u/57146734?v=4'
    }

    // Chamamos o api mock e simulamos o retorno do objeto
    apiMock.get.mockResolvedValue({ data: userSearch })

    // Simulamos que o usuário pesquisando um novo o username 
    const input = screen.getByPlaceholderText("Github username...")    
    userEvent.type(input, "VanessaSwerts")

    const form = screen.getByTestId("search-form")        
    fireEvent.submit(form)

    // Pegamos o componente responsável por mostrar a mensagem Carregando
    const loading = screen.getByTestId('message-loading')

    // Esperamos pelo componente aparecer na tela
    await waitFor(() => {
      expect(loading).toBeInTheDocument();
    });    

    // Verificamos se ela realmente aparece na tela.
    expect(loading).toHaveTextContent('Carregando...')
    // expect(loading).toBeInTheDocument()
  })

  it('Após pesquisar, deve mostrar o dados do usuário pesquisado!', async () => {
    render(<Home />)

    const userSearch = {
      name: "Vanessa Swerts",
      login: "VanessaSwerts",
      location: "Minas Gerais - Brazil",
      followers: "51",
      following: "66",
      public_repos: "19",
      avatar_url: 'https://avatars.githubusercontent.com/u/57146734?v=4'
    }   

    apiMock.get.mockResolvedValue({ data: userSearch })

    // Simulando a pesquisa
    const input = screen.getByPlaceholderText("Github username...")
    // fireEvent.change(input, { target: { value: 'VanessaSwerts' } })
    userEvent.type(input, "VanessaSwerts")

    const form = screen.getByTestId("search-form")
    fireEvent.submit(form)

    //Esperamos ele encontrar o componente do card
    await screen.findByTestId('card-avatar')   
   
    // Buscamos os componentes que queremos testar
    const avatar = screen.getByTestId('card-avatar')
    const name = screen.getByTestId('card-name')
    const login = screen.getByTestId('card-username')
    const location = screen.getByTestId('card-location')
    const following = screen.getByTestId('card-following')
    const followers = screen.getByTestId('card-followers')
    const repos = screen.getByTestId('card-repos')

    // Criamos um objeto com os valores iniciais dos componentes.
    const userSearchTest = {
      name: name.textContent,
      login: login.textContent,
      location: location.textContent,
      followers: followers.textContent,
      following: following.textContent,
      public_repos: repos.textContent,
      avatar_url: avatar.src
    }

    // Conferindo se os valores do componente são iguais ao do retorno da apiMock
    expect(userSearchTest).toEqual(userSearch)
  })

  it('Ao pesquisar um usuario inválido, mostra a mensagem de erro ...', async () => {
    render(<Home />)

    apiMock.get.mockRejectedValue(new Error())

    // Simulamos que o usuário pesquisando um novo o username 
    const input = screen.getByPlaceholderText("Github username...")
    userEvent.type(input, "vanessaswerts12345")

    const form = screen.getByTestId("search-form")
    fireEvent.submit(form)

    // Esperamos realizar a requisição
    await waitFor(() => expect(apiMock.get).toHaveBeenCalledTimes(1))
   
    // Pegamos o componente responsável por mostrar a mensagem de erro
    const error = screen.getByTestId('message-error')

    // Verificamos se ela realmente aparece na tela.
    expect(error).toHaveTextContent('Ops, usuário não encontrado!')
  })

})