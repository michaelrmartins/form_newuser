const createUpdateQuery = (table, data, condition) => {
    const keys = Object.keys(data); // received Field's 
    const setClause = keys.map(key => `${key} = ?`).join(', '); // Ex: "USERNAME = ?, CPF = ?"
    const values = Object.values(data); // placeholders
    const conditionClause = `${Object.keys(condition)[0]} = ?`; // Ex: "ID = ?"
    const conditionValue = Object.values(condition)[0]; // condition value
  
    const query = `UPDATE ${table} SET ${setClause} WHERE ${conditionClause}`;
    return { query, values: [...values, conditionValue] };
  };
  
// const newData = { "CPF": "19809844669", "Name": "Mike" }
// const condition = { "ID":"55" }

// console.log(createUpdateQuery('form_data', newData,condition))

module.exports = createUpdateQuery;