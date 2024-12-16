// Main Javascript File.

const formApiURL = "http://192.168.2.214:8059/api/roles"

// Load data
async function getApiDataForm(){
    const formRawData = await fetch(`${formApiURL}`).then(response => response.json())
    updateScreenValues(formRawData)
}

// Update Screen Values
function updateScreenValues(users) {
    const container = document.getElementById('userContainer');
    container.innerHTML = ''; 

    const table = document.createElement('table');
    table.classList.add('user-table');

    const headerRow = `
        <thead>
            <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Tipo</th>
                <th>Descrição</th>
                <th>Status</th>
                <th id="td-text-delete-row">Apagar</th>
            </tr>
        </thead>
    `;
    table.innerHTML = headerRow;
    
    const tbody = document.createElement('tbody'); // Table body

    users.forEach(user => {
        // const isCreatedClass = user.IS_CREATED == 'Feito' ? 'status-done' : 'status-pending';
        // const isfirstloginClass = user.IS_FIRST_LOGIN == 'Feito' ? 'status-done' : 'status-pending';
        const row = `
            <tr>
                <td id="td-username">${user.ROLE_NAME}</td>
                <td id="td-username">${user.ROLE_DESCRIPTION}</td>
                <td>${user.LICENCE_TYPE}</td>
                <td>${user.LICENCE_DESCRIPTION}</td>
                <td id="td-username">${user.ROLE_STATUS}</td>
                <td id="td-button-delete-row"><button onclick="deleteRoleRow(${user.ID})" id="button-${user.ID}" data-id="${user.ID}">❌</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    table.appendChild(tbody); 
    container.appendChild(table); 
}

//  Read form and send data to backend
document.getElementById('saveButton').addEventListener('click', function() {

const formData = {
    ROLE_NAME: document.getElementById('input-name').value,
    ROLE_DESCRIPTION: document.getElementById('input-description').value,
    LICENCE_TYPE: document.getElementById('input-role-type').value,
    LICENCE_DESCRIPTION: document.getElementById('input-type-description').value
};

const jsonData = JSON.stringify(formData);

console.log(jsonData)

fetch('http://192.168.2.214:8059/api/roles', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: jsonData,
})
.then(response => response.json())
.then(data => {
    if(data.error){
        console.log("ocorreu um erro:", data)
        alert(data.error.code + "\n" + data.error.message)
    } else {
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


// Delete Archive Rows
function deleteRoleRow(value) {
    fetch(`http://192.168.2.214:8059/api/roles/${value}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"ARCHIVED": "0"}),
    })
    const row = document.querySelector(`button[data-id="${value}"]`).closest('tr');
    row.remove()
    console.log(value);
}