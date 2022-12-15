class Pagina {

    acessoPage() {

        cy.visit('https://opensource-demo.orangehrmlive.com')

    }

    login() {

        cy.get('input[name="username"]').type('Admin')
        cy.get('input[type="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

    }

    loginInvalido() {

        cy.get('input[name="username"]').type('Hugo')
        cy.get('input[type="password"]').type('1234')
        cy.get('button[type="submit"]').click()

    }

    usernameVazio() {

        cy.get('input[name="username"]').type(' ')
        cy.get('input[type="password"]').type('1234')
        cy.get('button[type="submit"]').click()

    }

    editarPerfil() {

        cy.get('a[href="/web/index.php/pim/viewMyDetails"]').click()
        cy.get('input[name="firstName"]').clear().type('Carlos')
        cy.get('input[name="middleName"]').clear().type('Magno')
        cy.get('input[name="lastName"]').clear().type('Magalhães')
        cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Carlito')

    }

    fazerLogout() {

        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

    }



}

export default new Pagina