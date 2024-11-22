const queryDeleteUser = `
DELETE FROM cadastro_usuarios.form_data
where ID = ?;

`; // End

module.exports = {queryDeleteUser}

