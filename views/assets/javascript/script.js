function enableFields () {
    console.log("cliked...")
    const inputList = document.querySelectorAll("input, select");
    console.dir(inputList);
    inputList.forEach(id => {
        id.removeAttribute("disabled")
        
    });
}


function showMessage(parameterField, textMessage) {
    console.log(parameterField)
    console.log(textMessage)
    // const parameterField = parameterField;
    // const textMessage = textMessage;
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

    const formData = {
        CPF: sanitizedCpf,
        USERNAME: document.getElementById('input-name').value,
        BIRTHDATE: sanitizedBirthdate,
        PHONE: document.getElementById('input-phone').value,
        EMAIL: document.getElementById('input-email').value,
        CEP: sanitizedCep,
        ID_ROLE: document.getElementById('role-names').value,
        REGISTERNUMBER: document.getElementById('input-register').value,
    };

    const jsonData = JSON.stringify(formData);

   
    fetch('http://192.168.2.214:8055/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonData,
    })
    .then(response => response.json())
    .then(data => {
        // Handle backend response
        console.log('Sucesso:', data);
        alert('Dados enviados com sucesso!');
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar os dados.');
    });
});