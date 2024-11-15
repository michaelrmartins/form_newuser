const modelGetRegistersForm = `
SELECT * FROM cadastro_usuarios.form_data; 
`; // End

const modelGetRolesValues = `
SELECT * FROM cadastro_usuarios.form_roles;
`; // End

module.exports = {
    modelGetRegistersForm,
    modelGetRolesValues
}