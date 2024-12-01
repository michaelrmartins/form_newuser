
/// Popolate Dropdown Roles
async function populateDropdownRoles() {
    try{
        // Get data from API
        const roleDataFromDatabase = await fetch('http://192.168.2.214:8059/api/roles');
        const roleValues = await roleDataFromDatabase.json();

        // console.log(roleValues);

        roleDropDown = document.getElementById('role-names')

        // Write data on Dropdown
        roleValues.forEach( roleValue => {
            // console.log(roleValue.ID)
            // console.log(roleValue.ROLE_NAME)

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
        // Get data from API
        const departmentsDataFromDatabase = await fetch('http://192.168.2.214:8059/api/departments');
        const departmentsValues = await departmentsDataFromDatabase.json();

        departmentsDropDown = document.getElementById('departments-names')

        // Write data on Dropdown
        departmentsValues.forEach( departmentsValue => {
            // console.log(roleValue.ID)
            // console.log(roleValue.ROLE_NAME)

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