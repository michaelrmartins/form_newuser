const modelGetRegistersForm = `
SELECT * FROM cadastro_usuarios.form_data; 
`; // End

const modelGetRolesValuesActive = `
SELECT * FROM cadastro_usuarios.form_roles
where ROLE_STATUS = 1
`; // End

module.exports = {
    modelGetRegistersForm,
    modelGetRolesValuesActive
}