
/// Popolate Dropdown Roles
async function populateDropdownRoles() {
    try{
        const roleDataFromDatabase = await fetch('http://192.168.2.214:8059/api/roles'); // Get data from API
        const roleValues = await roleDataFromDatabase.json();

        roleDropDown = document.getElementById('role-names')

        // Write data on Dropdown
        roleValues.forEach( roleValue => {
            const option = document.createElement('option');
            option.value = roleValue.ID;
            option.textContent = roleValue.ROLE_NAME;
            roleDropDown.appendChild(option)
        });
    } // End Try
    catch (error)
    {console.error(error)}
    
} // End Function

/// Popolate Dropdown Departments
async function populateDropdownDepartments() {
    try{       
        const departmentsDataFromDatabase = await fetch('http://192.168.2.214:8059/api/departments');  // Get data from API
        const departmentsValues = await departmentsDataFromDatabase.json();

        departmentsDropDown = document.getElementById('departments-names')

        // Write data on Dropdown
        departmentsValues.forEach( departmentsValue => {
            const option = document.createElement('option');
            option.value = departmentsValue.ID;
            option.textContent = departmentsValue.NAME;
            departmentsDropDown.appendChild(option)
        });
    } // End Try
    catch (error)
    {console.error(error)}
    
} // End Function

async function populateDropdown() {
    await populateDropdownRoles();
    await populateDropdownDepartments();
}