const queryDeleteUser = `
DELETE FROM cadastro_usuarios.form_data
where ID = ?
`;

const queryDeleteRole = `
DELETE FROM cadastro_usuarios.form_roles
where id = ?
`;

const queryDeleteDepartments = `
DELETE FROM cadastro_usuarios.form_departments
where id = ?
`;

module.exports = {queryDeleteUser,
                  queryDeleteRole,
                  queryDeleteDepartments}

