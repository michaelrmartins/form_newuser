// Seleciona o campo de CPF
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
