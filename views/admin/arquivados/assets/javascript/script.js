// Main Javascript File.

const formApiURL = "http://192.168.2.214:8059/api/form"

// Load data
async function getApiDataForm(){
    const formRawData = await fetch(`${formApiURL}`).then(response => response.json())
    const filteredRawData = formRawData
    .filter (filtered => Number(filtered.ARCHIVED === 1))
     updateScreenValues(filteredRawData)
}

//  Updata Data on Screen
function updateScreenValues(users) {
    const container = document.getElementById('userContainer');
    container.innerHTML = ''; // Clean before render

    // Create table
    const table = document.createElement('table');
    table.classList.add('user-table');

    // Create Top table
    const headerRow = `
        <thead>
            <tr>
                <th>Nome</th>
                <th>Nome da Mãe</th>
                <th>CPF</th>
                <th>Data de Nascimento</th>
                <th>Telefone</th>
                <th>CEP</th>
                <th>Email</th>
                <th>Setor</th>
                <th>Especialidade</th>
                <th>Status</th>
                <th>Primeiro login</th>
                <th id="td-text-archive-row">Desarquivar</th>
                <th id="td-text-delete-row">Apagar</th>
            </tr>
        </thead>
    `;
    table.innerHTML = headerRow;
    
    const tbody = document.createElement('tbody'); // Table body

    users.forEach(user => {
        const isCreatedClass = user.IS_CREATED == 'Feito' ? 'status-done' : 'status-pending';
        const isfirstloginClass = user.IS_FIRST_LOGIN == 'Feito' ? 'status-done' : 'status-pending';
        const row = `
            <tr>
                <td id="td-username">${user.USERNAME}</td>
                <td class="mother-name">${user.MOTHER_NAME}</td>
                <td>${user.CPF}</td>
                <td>${new Date(user.BIRTHDATE).toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric'})}</td>
                <td>${user.PHONE}</td>
                <td>${user.CEP}</td>
                <td>${user.EMAIL}</td>
                <td>${user.DEPARTMENT_NAME}</td>
                <td>${user.ROLE_NAME}</td>
                <td class="${isCreatedClass}">${user.IS_CREATED}</td>
                <td class="${isfirstloginClass}">${user.IS_FIRST_LOGIN}</td>
                <td id="td-button-archive-row"><button onclick="removeFromArchiveRow(${user.ID})" id="button-${user.ID}" data-id="${user.ID}">⬆</button></td>
                <td id="td-button-delete-row"><button onclick="deleteArchiveRow(${user.ID})" id="button-${user.ID}" data-id="${user.ID}">❌</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    table.appendChild(tbody); 
    container.appendChild(table); 
}

// Remove from Archive Rows
function removeFromArchiveRow(value) {
    fetch(`http://192.168.2.214:8059/api/form/${value}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"ARCHIVED": "0"}),
    })
    const row = document.querySelector(`button[data-id="${value}"]`).closest('tr');
    row.remove()
    console.log(value);
}

// Delete Archive Rows
function deleteArchiveRow(value) {
    fetch(`http://192.168.2.214:8059/api/form/${value}`, {
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