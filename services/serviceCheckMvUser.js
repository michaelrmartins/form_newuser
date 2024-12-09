// Check Mv User Service  
// load MV users and local users, and compare both lists

const localApiUrlRegisters = "http://192.168.2.214:8059/api/form/";
const OraMvApiUrlRegisters = "http://192.168.2.214:8073/api/users/CPF"

// Check CPF Is Created
async function CheckCpfIsCreated() {
    try {
        // Load Local Data
        const rawLocalCpfData = await fetch(localApiUrlRegisters)
        const jsonRawLocalCpfData = await rawLocalCpfData.json()
        const jsonRawLocalCpfDataMapped = jsonRawLocalCpfData
        .filter(filtered => filtered.IS_CREATED === "Pendente")
        .map(filtered => filtered.CPF)

        // Load Mv Data
        const rawMvCpfData = await fetch(OraMvApiUrlRegisters)
        const jsonRawMvCpfData = await rawMvCpfData.json()
        const jsonRawMvCpfDataMapped = jsonRawMvCpfData.map(cpfValue => cpfValue)

        // Convert Mv List to Set
        const mvCpfSetData = new Set(jsonRawMvCpfDataMapped) 

        // Check and Update if Necessary
        jsonRawLocalCpfDataMapped.forEach(localCpf => {
            // CPF Found on MV list \/
            if(mvCpfSetData.has(localCpf)) { 
                // Update User on Database
                fetch(`http://192.168.2.214:8059/api/form/cpf/${localCpf}`, {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json', }, 'body': JSON.stringify({ IS_CREATED: '1'}),
                }) // End Fetch
            } else {
                console.log(`Cpf não encontrado na Lista MV: ${localCpf}`)
            } // End If
        })// End For Each
    } catch (error) {console.error(error)} // End Catch
} //End CheckCpfIsCreated

// Check CPF Is first Login
async function CheckCpfIsfirstLogin() {
    try {
        // Load Local Data
        const rawLocalCpfData = await fetch(localApiUrlRegisters)
        const jsonRawLocalCpfData = await rawLocalCpfData.json()
        const jsonRawLocalCpfDataMapped = jsonRawLocalCpfData
        .filter(filtered => filtered.IS_CREATED === "Feito")
        .map(filtered => filtered.CPF)

        // Load Mv Data
        const rawMvCpfData = await fetch(OraMvApiUrlRegisters)
        const jsonRawMvCpfData = await rawMvCpfData.json()
        const jsonRawMvCpfDataMapped = jsonRawMvCpfData.map(cpfValue => cpfValue)

        // Convert Mv List to Set
        const mvCpfSetData = new Set(jsonRawMvCpfDataMapped) 

        // Check and Update if Necessary
        jsonRawLocalCpfDataMapped.forEach(localCpf => {
            // CPF Found on MV list \/
            if(mvCpfSetData.has(localCpf)) { 
                console.log(`Cpf encontrado em ambas as Listas: ${localCpf}`)
                // Update User on Database
                fetch(`http://192.168.2.214:8059/api/form/cpf/${localCpf}`, {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json', }, 'body': JSON.stringify({ IS_FIRST_LOGIN:'1'}),
                }) // End Fetch
            } else {
                console.log(`Cpf não encontrado na Lista MV: ${localCpf}`)
            } // End If
        })// End For Each
    } catch (error) {console.error(error)} // End Catch
} //End CheckCpfIsfirstLogin

// Call Functions
CheckCpfIsCreated()
CheckCpfIsfirstLogin()