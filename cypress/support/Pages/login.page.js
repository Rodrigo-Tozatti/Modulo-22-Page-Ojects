
export const loginPage = {
    get usuario() {return cy.get("#user_login")},
    get senha() {return cy.get("#user_pass")},
    get acessar() {return cy.get("#wp-submit")},

    login(usuario, senha) {
        this.usuario.type(usuario) // para forçar colocar a informação no campo
        this.senha.type(senha)
        this.acessar.click()
    }
}

/*class loginPage {
    get usuario() {return cy.get("#user_login")}
    get senha() {return cy.get("#user_pass")}
    get acessar() {return cy.get("#wp-submit")}

    login(usuario, senha) {
        this.usuario.type(usuario)
        this.senha.type(senha)
        this.acessar.click()
    }
}
module.exports = new loginPage()*/