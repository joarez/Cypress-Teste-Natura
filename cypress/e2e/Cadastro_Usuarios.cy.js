///<reference types="cypress"/>

import {faker } from '@faker-js/faker'
import Elements from '../support/Elements';
faker.locale = 'pt_BR';

const Name = faker.name.firstName();
const Email = faker.internet.email();
const Sobrenome = faker.name.lastName();
const number = faker.internet.password(20, false, /[a-zA-Z0-9!@#$%^&*()]/i,'')
const CPF = faker.helpers.replaceSymbolWithNumber('###### ####')
const cellphone = faker.phone.number('##-9#####-###') 

describe("Cadastros", () => {
    it('Acessando Pagina', () => {  
      cy.visit('https://www.natura.com.br/');
      cy.wait(1500);
      cy.get(Elements.Botoes_Cadastros.pop_up_cookies).click();
      cy.get(Elements.Botoes_Cadastros.HambugMenu).click();
      cy.wait(1000);
      cy.get(Elements.Botoes_Cadastros.Cadastrar_se).contains('Cadastrar-se').click();
      cy.get(Elements.Input_Cadastro.PrimeiroNome).type(Name);
      cy.get(Elements.Input_Cadastro.Sobrenome).type(Sobrenome,{ sensitive: true });
      cy.get(Elements.Input_Cadastro.Email).type(Email,{ sensitive: true });
      cy.get(Elements.CheckBox_Cadastro.CheckBox_novidades).click();
      cy.get(Elements.Input_Cadastro.Senha).type(number,{ sensitive: true });
      cy.get(Elements.Input_Cadastro.Confirma_Senha).type(number, { sensitive: true });
      cy.get(Elements.Input_Cadastro.CPF).type(CPF); 
      cy.get(Elements.Input_Cadastro.DataNascimento).click();
      cy.get(Elements.Alert_Cadastro.Alert_CPF).should('be.visible', 'CPF inválido')
        .then(($el) => {
        if ($el.length) {
          cy.get(Elements.Input_Cadastro.CPF).should('be.visible').clear();
          cy.get(Elements.Input_Cadastro.CPF).type('535.489.350-01');
         } 
      }); 
      cy.get(Elements.Input_Cadastro.DataNascimento).type('20.10.2000');
      cy.get(Elements.RadioBotton.GêneroFem).contains('Feminino').click();
      cy.get(Elements.Input_Cadastro.cellphone).type(cellphone);
      cy.get(Elements.CheckBox_Cadastro.CheckBox_novidades_SMS).click();
      cy.get(Elements.CheckBox_Cadastro.CheckBox_Minhas_Informacao).click();
      cy.get(Elements.CheckBox_Cadastro.CheckBox_Termos).click();
      cy.get(Elements.Botoes_Cadastros.BtnCriar_Conta).click(); 
      cy.wait(100);
      cy.get('.MuiTypography-colorError').then(($el) => {
        if ($el.length) {
          cy.get('.MuiTypography-colorError').should('exist');
          cy.visit('https://www.natura.com.br/login?');
         } else {
        cy.get(Elements.TextoIframe.Text_Cep).should('be.visible',{timeout: 2000})
        }
      });       

    })
});
    

