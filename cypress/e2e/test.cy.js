import { ELEMENTS } from "../../elements"

describe('Teste de página local', () => {

  beforeEach(() => {
    cy.visit('public/index.html')
  })

    it('Verifica se o título está correto', () => {
      
      cy.title().should('eq', 'Cadastro de Funcionários')
    })

    it('Funcionário cadastrado com sucesso', () => {

      
      cy.get(ELEMENTS.camponome).type("Leomar Souza")
      cy.get(ELEMENTS.campocargo).type("QA")
      cy.get(ELEMENTS.camposexo).select("Masculino")
      cy.get(ELEMENTS.campotelefone).type("51999999999")
      cy.get(ELEMENTS.camposalario).type("5000")
      cy.get(ELEMENTS.campocpf).type("23062545089")
      cy.get('.button-primary').click()
      cy.get('p').should("have.text","Cadastro realizado com sucesso!")
    })

    it('Exibe mensagem de erro ao submeter formulário com cpf inválido', () => {

      cy.get(ELEMENTS.camponome).type("Leomar Dias")
      cy.get(ELEMENTS.campocargo).type("QA")
      cy.get(ELEMENTS.camposexo).select("Masculino")
      cy.get(ELEMENTS.campotelefone).type("51984613573")
      cy.get(ELEMENTS.camposalario).type("5000")
      cy.get(ELEMENTS.campocpf).type("21574969989")
      cy.get('.button-primary').click()
      cy.on('window:alert', (message) => {
        expect(message).to.equal('CPF inválido!')
      })
    })

    it('Exibe mensagem de erro ao submeter formulário sem preencher o campo nome', () => {

      cy.get(ELEMENTS.campocargo).type("QA")
      cy.get(ELEMENTS.camposexo).select("Masculino")
      cy.get(ELEMENTS.campotelefone).type("51999999999")
      cy.get(ELEMENTS.camposalario).type("5000")
      cy.get(ELEMENTS.campocpf).type("23062545089")
      cy.get('.button-primary').click()
      cy.on('window:alert', (message) => {
        expect(message).to.equal("Campo 'Nome' é obrigatório!") 
      })
    })

    it('Exibe mensagem de erro ao submeter formulário sem preencher o campo cargo', () => {

      cy.get(ELEMENTS.camponome).type("Leomar Souza")
      cy.get(ELEMENTS.camposexo).select("Masculino")
      cy.get(ELEMENTS.campotelefone).type("51999999999")
      cy.get(ELEMENTS.camposalario).type("5000")
      cy.get(ELEMENTS.campocpf).type("23062545089")
      cy.get('.button-primary').click()
      cy.on('window:alert', (message) => {
        expect(message).to.equal("Campo 'Cargo' é obrigatório!") 
      })
    })



    it('Exibe mensagem de erro ao submeter formulário sem selecionar o sexo', () => {

      
      cy.get(ELEMENTS.camponome).type("Leomar Souza")
      cy.get(ELEMENTS.campocargo).type("QA")
      cy.get(ELEMENTS.campotelefone).type("51999999999")
      cy.get(ELEMENTS.camposalario).type("5000")
      cy.get(ELEMENTS.campocpf).type("23062545089")
      cy.get('.button-primary').click()
      cy.on('window:alert', (message) => {
        expect(message).to.equal("Campo 'Sexo' é obrigatório!") 
      })
    })

    it('Exibe mensagem de erro ao submeter formulário sem preencher campo telefone', () => {

      
      cy.get(ELEMENTS.camponome).type("Leomar Souza")
      cy.get(ELEMENTS.campocargo).type("QA")
      cy.get(ELEMENTS.camposexo).select("Masculino")
      cy.get(ELEMENTS.camposalario).type("5000")
      cy.get(ELEMENTS.campocpf).type("23062545089")
      cy.get('.button-primary').click()
      cy.on('window:alert', (message) => {
        expect(message).to.equal("Campo 'Telefone' é obrigatório!") 
      })
    })

    it('Exibe mensagem de erro ao submeter formulário sem preencher campo salário', () => {

      
      cy.get(ELEMENTS.camponome).type("Leomar Souza")
      cy.get(ELEMENTS.campocargo).type("QA")
      cy.get(ELEMENTS.camposexo).select("Masculino")
      cy.get(ELEMENTS.campotelefone).type("51999999999")
      cy.get(ELEMENTS.campocpf).type("23062545089")
      cy.get('.button-primary').click()
      cy.on('window:alert', (message) => {
        expect(message).to.equal("Campo 'Salário' é obrigatório!") 
      })
    })


    it('Exibe mensagem de erro ao submeter formulário sem preencher campo cpf', () => {

      
      cy.get(ELEMENTS.camponome).type("Leomar Souza")
      cy.get(ELEMENTS.campocargo).type("QA")
      cy.get(ELEMENTS.camposexo).select("Masculino")
      cy.get(ELEMENTS.campotelefone).type("51999999999")
      cy.get(ELEMENTS.camposalario).type("5000")
      cy.get('.button-primary').click()
      cy.on('window:alert', (message) => {
        expect(message).to.equal("Campo 'CPF' é obrigatório!") 
      })
    })
})