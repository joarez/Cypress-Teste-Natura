export const Elements = { 
    Botoes_Cadastros: {
        pop_up_cookies: '#onetrust-accept-btn-handler',
        HambugMenu: '.natds5 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons',
        Cadastrar_se: '.MuiTypography-body2 > .MuiTypography-root',
        BtnCriar_Conta: '.natds624 > .MuiButtonBase-root'
        
    },

    Input_Cadastro: {
        PrimeiroNome: ':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input',
        Sobrenome: ':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input',
        Email: ':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input',
        Senha: '#password-field',
        Confirma_Senha: '#confirmPassword-field',
        CPF: ':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input',
        DataNascimento: ':nth-child(9) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input',
        cellphone: ':nth-child(11) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
    },

    RadioBotton: {
        GêneroFem: '.MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .natds576'
        //cy.get('.MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .natds576')
    },

    CheckBox_Cadastro: {
        CheckBox_novidades        : '#receiveNewsLetter',  //Desejo receber por e-mail novidades e promoções da Natura = false
        CheckBox_novidades_SMS    : '#receiveNewsLetterSms',  //Desejo receber por SMS novidades e promoções da Natura
        CheckBox_Minhas_Informacao: '#infContOptIn' , //Desejo disponibilizar minhas informações de email e telefone com a consultora de beleza Natura
        CheckBox_Termos:'#acceptedterms'
    },

    TextoIframe: {
        Text_Cep:'.NatDSAppBarHighlight > .MuiTypography-caption'
    },

    Alert_Cadastro: {
        Alert_CPF: ':nth-child(8) > .MuiBox-root > .MuiTypography-root'
    }
    
}

export default Elements