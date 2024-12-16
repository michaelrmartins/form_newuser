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
            </tr>
        `;
        tbody.innerHTML += row;
    });
    table.appendChild(tbody); 
    container.appendChild(table); 
}

