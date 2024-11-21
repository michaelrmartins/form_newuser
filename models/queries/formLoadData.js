const queryGetRegistersForm = `
SELECT * FROM cadastro_usuarios.form_data; 
`; // End

const queryGetRegistersById = `
SELECT * FROM cadastro_usuarios.form_data
where id = ?
`; // End

const queryGetRolesValuesActive = `
SELECT * FROM cadastro_usuarios.form_roles
where ROLE_STATUS = 1
`; // End

// Module Exports
module.exports = {
    queryGetRegistersForm,
    queryGetRegistersById,
    queryGetRolesValuesActive
}