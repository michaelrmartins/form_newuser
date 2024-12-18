// Main Javascript File.

const formApiURL = "http://192.168.2.214:8059/api/form"

// Load data
async function getApiDataForm(){
    const formRawData = await fetch(`${formApiURL}`).then(response => response.json())
    const filteredRawData = formRawData
    .filter (filtered => Number(filtered.ARCHIVED === 0))
    updateScreenValues(filteredRawData)
    // console.table(formRawData);
}

// Função para atualizar os valores na tela
function updateScreenValues(users) {
    const container = document.getElementById('userContainer');
    container.innerHTML = ''; // Limpa o container antes de renderizar

    // Cria a tabela
    const table = document.createElement('table');
    table.classList.add('user-table');

    // Cria o cabeçalho da tabela
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
                <th>Data da solicitação</th>
                <th>Status</th>
                <th>Primeiro login</th>
                <th id="td-text-archive-row">Arquivar</th>
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
                <td>${new Date(user.BIRTHDATE).toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric' })}</td>
                <td>${user.PHONE}</td>
                <td>${user.CEP}</td>
                <td>${user.EMAIL}</td>
                <td>${user.DEPARTMENT_NAME}</td>
                <td>${user.ROLE_NAME}</td>
                <td>
                    ${new Date(user.CREATED_ON).toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric'})},
                    ${new Date(user.CREATED_ON).toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: 'false'})}
                </td>
                <td class="${isCreatedClass}">${user.IS_CREATED}</td>
                <td class="${isfirstloginClass}">${user.IS_FIRST_LOGIN}</td>
                <td id="td-button-archive-row"><button onclick="archiveRow(${user.ID})" id="button-archive-row" data-id="${user.ID}">📂</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    table.appendChild(tbody); 
    container.appendChild(table); 
}

// Archive Rows
function archiveRow(value) {
    fetch(`http://192.168.2.214:8059/api/form/${value}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"ARCHIVED": "1"}),
    })
    const row = document.querySelector(`button[data-id="${value}"]`).closest('tr');
    row.remove()
    // window.location.reload()
    console.log(value);
}