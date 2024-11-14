const queryRegNewUser = `
INSERT INTO form_data (USERNAME, BIRTHDATE, CPF, PHONE, CEP, ID_ROLE, USER_EXAMPLE)
VALUES (?, ?, ?, ?, ?, ?, ?);

`; // END

module.exports = { queryRegNewUser } ;