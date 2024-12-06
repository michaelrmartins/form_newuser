const querySMTPGetData = `
SELECT * FROM cadastro_usuarios.smtp_config
`;

const querySMTPGetDataById = `
SELECT * FROM cadastro_usuarios.smtp_config
where id = ?
`;

module.exports = { querySMTPGetData,
                   querySMTPGetDataById
 }