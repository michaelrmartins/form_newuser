  // / ********* CPF FIELD LISTENER ************ \ \\
const cpfInput = document.getElementById('input-cpf');
        
// Adiciona um listener para o evento de input
// Remove qualquer caracter que não seja número
cpfInput.addEventListener('input', async function(event) {
   
    const inputValue = event.target.value.replace(/\D/g, '');
    
    //  Call validaCPF() function 
    if (validaCPF(inputValue)) {
        console.log(inputValue)
        showMessage('cpf-check-message', '')
        // if( await checkCpfIsWaitingToCreate(inputValue)){
        if( await checkCpfIsWaitingToCreate (inputValue)){
            console.log("chegou nesse caralho")
            alert("Já existe uma solicitação para este CPF, em breve entraremos em contato")
            console.log("Já existe uma solicitação para este CPF...") 


        } else if (await checkCpfExistsInMv(inputValue)) {
            
            console.log("chegou nesse caralho 2")
            alert("Já Existe um Cadastro no Sistema MV para o CPF informado, Compareça ao GTI para atualizar seu cadastro.")
            console.log("CPF já Cadastrado no MV...")
                    

        // if( await checkCpfExistsInMv(inputValue)){
        //     console.log("chegou nesse caralho 2")
        //     alert("Já Existe um Cadastro no Sistema MV para o CPF informado, Compareça ao GTI para atualizar seu cadastro.")
        //     console.log("CPF já Cadastrado no MV...")
        //    } 
        // } else {
        //     console.log("chegou nesse caralho antes do if" + inputValue)
        //     if( await checkCpfExistsInMv(inputValue)){
        //     console.log("chegou nesse caralho 2")
        //     alert("Já Existe um Cadastro no Sistema MV para o CPF informado, Compareça ao GTI para atualizar seu cadastro.")
        //     console.log("CPF já Cadastrado no MV...")
        //    }
           
        } else {
                console.log("Permitido Enviar Cadastro")
                showMessage("cpf-check-message", "✅")
                enableFields ()}
        
    } else {
        const valuesElement = document.getElementById('input-cpf');
        if(valuesElement.value.length == 14){
            console.log('CPF inválido');
        showMessage('cpf-check-message', 'CPF Inválido')
        } else { showMessage('cpf-check-message', '') }    
    }

    const maxLength = 11; // limit max digits to 11
    const formattedValue = inputValue.slice(0, maxLength);
    
    event.target.value = formattedValue;    // Finnaly, update field
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


cepInput.addEventListener('input', async function(event) {
    let inputValue = event.target.value.replace(/\D/g, ''); // Remove Any NaN 

    inputValue = inputValue.slice(0, 8);

    if (inputValue.length === 8){
        formUserCep = await getCepData(inputValue) // Get API Data
        if(formUserCep.erro){
            showMessage("cep-check-message", "Cep Inválido") 
            console.log(formUserCep.erro)}
        else { // Valid CPF Flow >> 
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
    event.target.value = formattedValue; // Update field
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

    } else {document.getElementById('licence-type').innerHTML = " (" + roleLicenceName + ")"}
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
        showMessage("email-check-message", "✅")
        console.log("Email Válido!!")
    } else {showMessage('email-check-message', 'Email Inválido')}
} // End emailIsValid

  // / ********* CHECK CPF EXISTS IN LOCAL DATABASE ************ \ \\
async function checkCpfIsWaitingToCreate(inputCpfValue){
    try {
        const rawCpfData = await fetch('http://192.168.2.214:8059/api/form')
        const jsonCpfData = await rawCpfData.json()
        
        let pendentesList = jsonCpfData
            .filter(filtered => filtered.IS_CREATED === "Pendente")
            .filter(filtered => filtered.IS_FIRST_LOGIN === "Pendente")

        let mappedValues = pendentesList.map(cpfValue => cpfValue.CPF)
                
        // Check input value and compare with mapped values | Return true or False
        const isCpfIncludes = mappedValues.includes(inputCpfValue)
        console.log(isCpfIncludes)
        return isCpfIncludes;

    } // End Try
    catch(error) {console.error(error)}

} //End getCpfListWaitingCreate function

  // / ********* CHECK CPF EXISTS IN MV DATABASE************ \ \\
async function checkCpfExistsInMv(inputCpfValue){
    try {
        const rawCpfData = await fetch('http://192.168.2.214:8073/api/users/CPF')
        const jsonCpfData = await rawCpfData.json()

        // console.log(jsonCpfData)
        
        // let pendentesList = jsonCpfData
        //     .filter(filtered => filtered.IS_CREATED === "Pendente")
        //     .filter(filtered => filtered.IS_FIRST_LOGIN === "Pendente")

        let mappedValues = jsonCpfData.map(cpfValue => cpfValue)
        // console.log(mappedValues)
                
        // Check input value and compare with mapped values | Return true or False
        const isCpfIncludes = mappedValues.includes(inputCpfValue)
        console.log(isCpfIncludes)
        return isCpfIncludes;

    } // End Try
    catch(error) {console.error(error)}

} //End checkCpfExistsInMv function