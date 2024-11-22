/**
 * Michael Martins - 2024
 * @file createUpdateQuery.js
 * @description
 * This function dynamically generates SQL `UPDATE` statements using the provided 
 * data and a condition for the `WHERE` clause.
 * 
 * The function converts the fields and values from a data object (`data`) into 
 * a parameterized SQL command, ensuring protection against SQL injection and 
 * flexibility for query generation.
 * 
 * @param {string} table - The name of the table to be updated.
 * @param {Object} data - An object containing the fields and their new values to update.
 * @param {Object} condition - An object specifying the condition for the `WHERE` clause.
 * @returns {Object} - An object containing:
 *   - `query` {string}: The dynamically generated SQL `UPDATE` statement.
 *   - `values` {Array}: An array of values to be used as placeholders in the query.
 * 
 * @example
 * const table = 'users';
 * const data = { USERNAME: 'JohnDoe', CPF: '123456789' };
 * const condition = { ID: 42 };
 * 
 * const { query, values } = createUpdateQuery(table, data, condition);
 * console.log(query); // Outputs: "UPDATE users SET USERNAME = ?, CPF = ? WHERE ID = ?"
 * console.log(values); // Outputs: ['JohnDoe', '123456789', 42]
 */

const createUpdateQuery = (table, data, condition) => {
    const keys = Object.keys(data); // received Field's 
    const setClause = keys.map(key => `${key} = ?`).join(', '); // Ex: "USERNAME = ?, CPF = ?"
    const values = Object.values(data); // placeholders
    const conditionClause = `${Object.keys(condition)[0]} = ?`; // Ex: "ID = ?"
    const conditionValue = Object.values(condition)[0]; // condition value
  
    const query = `UPDATE ${table} SET ${setClause} WHERE ${conditionClause}`;
    return { query, values: [...values, conditionValue] };
  };
  
module.exports = createUpdateQuery;