// Main Javascript File.

const formApiURL = "http://192.168.2.214:8059/form"

// Load data
async function getApiDataForm(){
    const formRawData = await fetch(`${formApiURL}`).then(response => response.json())
    updateScreenValues(formRawData)
    console.table(formRawData);
}


// function updateScreenValues(data){
//     data.forEach(USERNAME => {
//         document.getElementById('username').innerHTML = data.USERNAME
        
//     });
//     // document.getElementById('username').innerHTML = data

// }



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
                <th>CPF</th>
                <th>Data de Nascimento</th>
                <th>Telefone</th>
                <th>CEP</th>
                <th>Especialidade</th>
                <th>Status</th>
                <th>Primemiro login</th>
            </tr>
        </thead>
    `;
    table.innerHTML = headerRow;

    // Cria o corpo da tabela
    const tbody = document.createElement('tbody');

    users.forEach(user => {
        const row = `
            <tr>
                <td>${user.USERNAME}</td>
                <td>${user.CPF}</td>
                <td>${new Date(user.BIRTHDATE).toLocaleDateString()}</td>
                <td>${user.PHONE}</td>
                <td>${user.CEP}</td>
                <td>${user.ID_ROLE}</td>
                <td>${user.IS_CREATED}</td>
                <td>${user.IS_FIRST_LOGIN}</td>

            </tr>
        `;
        tbody.innerHTML += row;
    });

    table.appendChild(tbody); // Adiciona o corpo à tabela
    container.appendChild(table); // Adiciona a tabela ao container
}

