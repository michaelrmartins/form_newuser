// Change State Fields to Enabled
function enableFields () {
    const inputList = document.querySelectorAll("input, select, button");
    console.dir(inputList);
    inputList.forEach(id => {
        id.removeAttribute("disabled")
    });
}

// Show Message on frontend Handler
function showMessage(parameterField, textMessage) {
    console.log(parameterField)
    console.log(textMessage)
    document.getElementById(parameterField).innerHTML = textMessage
}

function changeFieldStyle(parameterField){
    document.getElementById(parameterField).style.backgroundColor = "red";
}

//  Read form and send data to backend
document.getElementById('sendButton').addEventListener('click', function() {

        // Sanitizer
        const sanitizedCpf = sanitizer(document.getElementById('input-cpf').value)   
        const sanitizedBirthdate = sanitizer(document.getElementById('input-birthdate').value)  
        const sanitizedCep = sanitizer(document.getElementById('input-cep').value)   

        // Get Email
        const userEmail = document.getElementById('input-email').value

    const formData = {
        CPF: sanitizedCpf,
        USERNAME: document.getElementById('input-name').value,
        BIRTHDATE: sanitizedBirthdate,
        PHONE: document.getElementById('input-phone').value,
        MOTHER_NAME: document.getElementById('input-mother-name').value,
        EMAIL: document.getElementById('input-email').value,
        CEP: sanitizedCep,
        ID_DEPARTMENT: document.getElementById('departments-names').value,
        ID_ROLE: document.getElementById('role-names').value,
        ROLE_REG_NUMBER: document.getElementById('input-register').value,
    };

    const emailData = {
        smtpConfigId: "1",
        email: document.getElementById('input-email').value,
        var1: document.getElementById('input-name').value
    }
    
    const jsonData = JSON.stringify(formData);
    const jsonEmailData = JSON.stringify(emailData)

    // console.log(jsonData)
   
    fetch('http://192.168.2.214:8059/api/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonData,
    })
    .then(response => response.json())
    .then(data => {
        if(data.error){
            console.log("ocorreu um erro:", data.error.message)
            if (data.error.message === "Column 'USERNAME' cannot be null") {var formatedMessage = "Você Precisa Preencher seu Nome"}
            if (data.error.message === "Column 'MOTHER_NAME' cannot be null") {var formatedMessage = "Você Precisa Preencher o campo Nome da Mãe"}
            if (data.error.message === "Column 'PHONE' cannot be null") {var formatedMessage = "Você Precisa Preencher o campo Telefone"}
            if (data.error.message === "Column 'EMAIL' cannot be null") {var formatedMessage = "Você Precisa Preencher o campo Email"}
            if (data.error.message === "Incorrect integer value: '' for column `cadastro_usuarios`.`form_data`.`ID_ROLE` at row 1") {var formatedMessage = "Escolha um Setor e uma Especialidade"}
            
            alert(formatedMessage)



        } else {

                // Send Confirm Email
                fetch('http://192.168.2.214:8059/api/smtp/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: jsonEmailData,
                })
            // Send Success Message to Frontend
            console.log("Cadastro realizado com sucesso")
            alert("Cadastro Realizado!!")
            window.location.reload()
        } // End Else
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('FATAL - Ocorreu um erro ao enviar os dados. \nBACKEND ERROR\n\n' + error);
    });
});