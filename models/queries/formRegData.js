const queryRegNewUser = `
INSERT INTO form_data (USERNAME, BIRTHDATE, CPF, MOTHER_NAME, PHONE, CEP, EMAIL, ID_ROLE, ID_DEPARTMENT, USER_EXAMPLE)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
`; // End

const queryRegNewRole = `
INSERT INTO cadastro_usuarios.form_roles ( ROLE_NAME, ROLE_DESCRIPTION, LICENCE_TYPE, LICENCE_DESCRIPTION )
VALUES (?, ?, ?, ?)
`; // End

const queryRegNewDepartment = `
INSERT INTO cadastro_usuarios.form_departments ( NAME, DESCRIPTION, TYPE )
VALUES (?, ?, ?)
`; // End

module.exports = { queryRegNewUser, 
                   queryRegNewRole,
                   queryRegNewDepartment } ;