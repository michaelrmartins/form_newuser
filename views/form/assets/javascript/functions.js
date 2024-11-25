  // / ********* CPF FIELD LISTENER ************ \ \\
const cpfInput = document.getElementById('input-cpf');
        
// Adiciona um listener para o evento de input
cpfInput.addEventListener('input', function(event) {
    // Remove qualquer caracter que não seja número
    const inputValue = event.target.value.replace(/\D/g, '');
    
    // Chama a função validaCPF() para verificar se o CPF é válido
    if (validaCPF(inputValue)) {
        console.log('CPF válido');
        showMessage('cpf-check-message', '')
        enableFields ()
        // changeFieldStyle('input-cpf')
    } else {
        const valuesElement = document.getElementById('input-cpf');
        console.log(valuesElement.value.length)
        if(valuesElement.value.length == 14){
            console.log('CPF inválido');
        showMessage('cpf-check-message', 'CPF Inválido')
        } else { showMessage('cpf-check-message', '') }    
    }

    // Limita o número máximo de dígitos
    const maxLength = 11;
    const formattedValue = inputValue.slice(0, maxLength);
    
    // Atualiza o valor do campo
    event.target.value = formattedValue;
});

document.getElementById('input-cpf').addEventListener('input', function(e) {
    var value = e.target.value;
    var cpfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
                          .replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
                          .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
    e.target.value = cpfPattern;
  });

  // / ********* CEP FIELD LISTENER ************ \ \\
const cepInput = document.getElementById('input-cep');

// Adiciona um listener para o evento de input
cepInput.addEventListener('input', function(event) {
    // Remove qualquer caracter que não seja número
    let inputValue = event.target.value.replace(/\D/g, '');


    console.log("cep...")
    // Limita o número máximo de dígitos para o CEP (8 dígitos)
    inputValue = inputValue.slice(0, 8);

    // Formata o valor no padrão XXXXX-XXX
    const formattedValue = inputValue.replace(/(\d{5})(\d)/, '$1-$2');

    // Atualiza o valor do campo
    event.target.value = formattedValue;
});

  // / ********* PHONE FIELD LISTENER ************ \ \\
const phoneInput = document.getElementById('input-phone');

phoneInput.addEventListener('input', function(event) {
    // Remove qualquer caracter que não seja número
    let inputValue = event.target.value.replace(/\D/g, '');

    // Limita o número máximo de dígitos (11 dígitos para celular com DDD)
    inputValue = inputValue.slice(0, 11);

    // MASK TO >> (XX) XXXXX-XXXX
    const formattedValue = inputValue
        .replace(/^(\d{2})(\d)/, '($1) $2') // Adiciona parênteses no DDD
        .replace(/(\d{5})(\d)/, '$1-$2');  // Adiciona traço após os 5 primeiros números do telefone

    // Update field value
    event.target.value = formattedValue;
});


  // / ********* EMAIL FIELD TEST ************ \ \\
function emailIsValid(email){

    if(validateEmail(email)){
        showMessage('cpf-check-message', '')
        console.log("Email Válido!!")
    } else {showMessage('cpf-check-message', 'Email Inválido')
            // Scroll page to up 
            window.scrollTo(0, 0);
    }
}
