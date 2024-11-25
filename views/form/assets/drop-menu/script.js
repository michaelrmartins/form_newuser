async function populateDropdown() {
    try{

        // Get data from API
        const roleDataFromDatabase = await fetch('http://192.168.2.214:8055/form/roles');
        const roleValues = await roleDataFromDatabase.json();

        console.log(roleValues);

        roleDropDown = document.getElementById('roleDropDown')

        // Write data on Drodown
        roleValues.forEach( roleValue => {
            console.log(roleValue.ID)
            console.log(roleValue.ROLE_NAME)

            const option = document.createElement('option');
            option.value = roleValue.ID;
            option.textContent = roleValue.ROLE_NAME;
            roleDropDown.appendChild(option)
           
        });

    } // End Try
    catch (error)
    {console.error(error)}
    
} // End Function