const queryRegNewUser = `
INSERT INTO form_data (USERNAME, BIRTHDATE, CPF, MOTHER_NAME, PHONE, CEP, EMAIL, ID_ROLE, ID_DEPARTMENT, USER_EXAMPLE)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);

`; // END

module.exports = { queryRegNewUser } ;