// Main Javascript File.

const formApiURL = "http://192.168.2.214:8059/api/departments"

// Load data
async function getApiDataForm(){
    const formRawData = await fetch(`${formApiURL}`).then(response => response.json())
    updateScreenValues(formRawData)
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
                <th>Descrição</th>
                <th>Tipo</th>
                <th>Status</th>
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
                <td id="td-username">${user.NAME}</td>
                <td class="mother-name">${user.DESCRIPTION}</td>
                <td>${user.TYPE}</td>
                <td>${user.STATUS}</td>
           </tr>
        `;
        tbody.innerHTML += row;
    });
    table.appendChild(tbody); 
    container.appendChild(table); 
}

