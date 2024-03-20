const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Configurações gerais do Cypress aqui

  // Configuração específica para testes e2e (ponta a ponta)
  e2e: {
    // Outras configurações específicas para testes e2e aqui
    supportFile: "cypress/support/e2e.js" // Substitua pelo caminho real do seu arquivo de suporte para testes e2e
  },

  // Configuração específica para testes de componentes
  component: {
    // Outras configurações específicas para testes de componentes aqui
    supportFile: "cypress/support/component.js" // Substitua pelo caminho real do seu arquivo de suporte para testes de componentes
  }
});
