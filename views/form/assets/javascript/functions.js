  // / ********* CPF FIELD LISTENER ************ \ \\
const cpfInput = document.getElementById('input-cpf');
        
// Adiciona um listener para o evento de input
cpfInput.addEventListener('input', async function(event) {
    // Remove qualquer caracter que não seja número
    const inputValue = event.target.value.replace(/\D/g, '');
    
    // Chama a função validaCPF() para verificar se o CPF é válido
    if (validaCPF(inputValue)) {
        // console.log('CPF válido');
        showMessage('cpf-check-message', '')
        if( await checkCpfIsWaitingToCreate(inputValue)){
            alert("Já existe uma solicitação para este CPF, em breve entraremos em contato")
            console.log("CPF já Cadastrado...")
        } else {console.log("Permitido Enviar Cadastro")
                showMessage("cpf-check-message", "✅")
                enableFields ()}

        // enableFields ()
        // changeFieldStyle('input-cpf')
    } else {
        const valuesElement = document.getElementById('input-cpf');
        // console.log(valuesElement.value.length)
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

// Listener
cepInput.addEventListener('input', async function(event) {
    // Remove qualquer caracter que não seja número
    let inputValue = event.target.value.replace(/\D/g, '');


    console.log("cep...")
    // Limita o número máximo de dígitos para o CEP (8 dígitos)
    inputValue = inputValue.slice(0, 8);

    // console.log(inputValue)
    // console.log(inputValue.length)
    if (inputValue.length === 8){
        // Get API Data
        formUserCep = await getCepData(inputValue)
        // IF Error: 
        if(formUserCep.erro){
            showMessage("cep-check-message", "Cep Inválido") 
            console.log(formUserCep.erro)}
        else { // Valid CPF Flow >> 
            console.log(formUserCep.logradouro)
            document.getElementById('cep-values-message').innerHTML = formUserCep.logradouro
             + ", "
             + formUserCep.bairro
             + " - "
             + formUserCep.localidade
             + " ("
             + formUserCep.uf + ")"
            showMessage("cep-check-message", "✅")} }

    else {showMessage("cep-check-message", "")
          showMessage("cep-values-message", "")
    }

    // Formata o valor no padrão XXXXX-XXX
    const formattedValue = inputValue.replace(/(\d{5})(\d)/, '$1-$2');

    // Atualiza o valor do campo
    event.target.value = formattedValue;
});


// // / ********* LICENCE TYPE LISTENER ************ \ \\
const licenceUserSelect = document.getElementById('role-names');

licenceUserSelect.addEventListener('change', async (event) => {
    console.log("Event licenceUserSelect")
    const licenceUserSelectValue = await parseInt(event.target.value)
    
    // Get data from API
    const roleDataFromDatabase = await fetch('http://192.168.2.214:8059/api/roles');
    const jsonRoleValues = await roleDataFromDatabase.json();

    // Filter Id using value sended by user
    let roleLicence = await jsonRoleValues
        .filter(filtered => filtered.ID === licenceUserSelectValue)
        // console.log(licenceUserSelectValue + licenceUserSelectValue)
    
    // Map Value and return only value == sended by user
    let roleLicenceName = roleLicence.map(licence => licence.LICENCE_TYPE)

    console.log("roleLicenceName:", roleLicenceName);
    console.log(roleLicenceName.length)

    if(roleLicenceName.length === 0 || roleLicenceName.every(value => value === null)){
         // Insert data on frontend when data is Null
        document.getElementById('licence-type').innerHTML = ""
        console.log("Null Value")

    } else {        
        // Insert data on frontend
        document.getElementById('licence-type').innerHTML = " (" + roleLicenceName + ")"
        console.log("Value received!!")}


    // console.log(roleLicence)
    console.log(roleLicenceName)

    // console.log(roleValues)
    console.log("User Value:" + licenceUserSelectValue)
})




  // / ********* PHONE FIELD LISTENER ************ \ \\
const phoneInput = document.getElementById('input-phone');

phoneInput.addEventListener('input', function(event) {
    // Remove qualquer caracter que não seja número
    let inputValue = event.target.value.replace(/\D/g, '');

    // Limita o número máximo de dígitos (11 dígitos para celular com DDD)
    inputValue = inputValue.slice(0, 11);

    // MASK TO >> (XX) XXXXX-XXXX
    const formattedValue = inputValue
        .replace(/^(\d{2})(\d)/, '($1) $2') // (XX) DDD Mask
        .replace(/(\d{5})(\d)/, '$1-$2');  // Phone mask "-"

    // Update field value
    event.target.value = formattedValue;
});


  // / ********* EMAIL FIELD TEST ************ \ \\
function emailIsValid(email){

    if(validateEmail(email)){
        // showMessage('email-check-message', '')
        showMessage("email-check-message", "✅")
        console.log("Email Válido!!")
    } else {showMessage('email-check-message', 'Email Inválido')
            // Scroll page to up 
            // window.scrollTo(0, 0);
    }
}

  // / ********* CHECK CPF EXISTS IN DATABASE ************ \ \\
async function checkCpfIsWaitingToCreate(inputCpfValue){
    try {
        const rawCpfData = await fetch('http://192.168.2.214:8059/api/form')
        const jsonCpfData = await rawCpfData.json()
        
        let pendentesList = jsonCpfData
            .filter(filtered => filtered.IS_CREATED === "Pendente")
            .filter(filtered => filtered.IS_FIRST_LOGIN === "Pendente")

        let mappedValues = pendentesList.map(cpfValue => cpfValue.CPF)
            
            // console.table(inputCpfValue)
            // console.table(mappedValues)
        
        // Check input value and compare with mapped values | Return true or False
        const isCpfIncludes = mappedValues.includes(inputCpfValue)
        console.log(isCpfIncludes)
        return isCpfIncludes;

    } // End Try
    catch(error) {console.error(error)}

} //End getCpfListWaitingCreate function