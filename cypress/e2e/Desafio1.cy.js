/// <reference types="cypress"/>
import Pagina from '../PageObject/DesafioPage'

describe('Validar acesso a página', () => {

    it('Validar acesso', () => {

        Pagina.acessoPage()

    })

    it('Login válido', () => {

        Pagina.acessoPage()
        Pagina.login()

    })

    it('Login Inválido', () => {

        Pagina.acessoPage()
        Pagina.loginInvalido()

    })

    it('Username vazio', () => {

        Pagina.acessoPage()
        Pagina.usernameVazio()

    })


})

describe('Editar profile', () => {


    it('Preencher nome completo', () => {

        Pagina.acessoPage()
        Pagina.login()
        Pagina.editarPerfil()

    })
})

describe('Fazer logout da página', () => {

    it('Logout', () => {

        Pagina.acessoPage()
        Pagina.login()
        Pagina.editarPerfil()
        Pagina.fazerLogout()

    })
})

