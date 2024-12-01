const queryGetRegistersForm = `
SELECT 
    form.ID,
    form.USERNAME,
    form.CPF,
    form.MOTHER_NAME,
    form.BIRTHDATE,
    form.PHONE,
    form.CEP,
    form.EMAIL,
    form.ID_DEPARTMENT,
    departments.NAME AS DEPARTMENT_NAME,
    form.ID_ROLE,
    roles.ROLE_NAME,
    CASE
        WHEN form.IS_CREATED = 0 THEN 'Pendente'
        WHEN form.IS_CREATED = 1 THEN 'Feito'
        ELSE 'desconhecido'
    END AS IS_CREATED,
    CASE
        WHEN form.IS_FIRST_LOGIN = 0 THEN 'Pendente'
        WHEN form.IS_FIRST_LOGIN = 1 THEN 'Feito'
    END AS IS_FIRST_LOGIN,
    form.ARCHIVED
FROM
    cadastro_usuarios.form_data form
        LEFT JOIN
    cadastro_usuarios.form_roles roles ON form.ID_ROLE = roles.ID
        LEFT JOIN
    cadastro_usuarios.form_departments departments ON form.ID_DEPARTMENT = departments.ID
WHERE
    form.ARCHIVED = 0
`; // End

const queryGetRegistersById = `
SELECT * FROM cadastro_usuarios.form_data
where id = ?
`; // End

const queryGetRolesValuesActive = `
SELECT * FROM cadastro_usuarios.form_roles
where ROLE_STATUS = 1
order by ROLE_NAME ASC
`; // End

const queryGetDepartments = `
SELECT * FROM cadastro_usuarios.form_departments
order by NAME asc

`; // End

// Module Exports
module.exports = {
    queryGetRegistersForm,
    queryGetRegistersById,
    queryGetRolesValuesActive,
    queryGetDepartments
}