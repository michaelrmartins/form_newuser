// Main Javascript File.

const formApiURL = "http://192.168.2.214:8059/api/departments"

// Load data
async function getApiDataForm(){
    const formRawData = await fetch(`${formApiURL}`).then(response => response.json())
    updateScreenValues(formRawData)
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
                <th id="td-text-delete-row">Apagar</th>
            </tr>
        </thead>
    `;
    table.innerHTML = headerRow;
    
    const tbody = document.createElement('tbody'); // Table body

    users.forEach(user => {
        const department_status_description = user.STATUS == '1' ? 'Ativado' : 'Desativado'
        const row = `
            <tr>
                <td id="td-username">${user.NAME}</td>
                <td class="mother-name">${user.DESCRIPTION}</td>
                <td>${user.TYPE}</td>
                <td>${department_status_description}</td>
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
        NAME: document.getElementById('input-name').value,
        DESCRIPTION: document.getElementById('input-description').value,
        TYPE: document.getElementById('input-department-type').value
        };
    
    const jsonData = JSON.stringify(formData);
    
    console.log(jsonData)
    
    fetch('http://192.168.2.214:8059/api/departments', {
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
        fetch(`http://192.168.2.214:8059/api/departments/${value}`, {
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