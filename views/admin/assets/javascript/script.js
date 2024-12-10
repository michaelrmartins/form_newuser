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
                <th>Status</th>
                <th>Primeiro login</th>
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
            </tr>
        `;
        tbody.innerHTML += row;
    });
    table.appendChild(tbody); 
    container.appendChild(table); 
}

