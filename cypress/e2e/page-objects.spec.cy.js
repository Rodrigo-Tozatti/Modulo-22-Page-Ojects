
const dados = require ('../fixtures/dados.json')
const { painelAdmin } = require ('../support/Pages/painelAdmin.page.js')
const { loginPage } = require ('../support/Pages/login.page')

describe('Acessar painel do administrador', () => {
  
  beforeEach(() => {
    cy.visit('wp-admin')
  });
  
  it('Deve fazer login com sucesso', () => {
    loginPage.login(dados.usuario, dados.senha) //acessar o login do page objects
    painelAdmin.ebacShop.should("be.visible") // confirmar se o ebac shop está visivel na página
  })
})