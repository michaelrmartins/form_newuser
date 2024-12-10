// Check Mv User Service  
// load MV users and local users, and compare both lists

const localApiUrlRegisters = "http://192.168.2.214:8059/api/form/";
const cpfMvApiUrlRegisters = "http://192.168.2.214:8073/api/users/CPF"
// const allMvApiUrlRegisters = "http://192.168.2.214:8073/api/users/"

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
        const rawMvCpfData = await fetch(cpfMvApiUrlRegisters)
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
        const rawMvCpfData = await fetch(cpfMvApiUrlRegisters)
        const jsonRawMvCpfData = await rawMvCpfData.json()
        const jsonRawMvCpfDataMapped = jsonRawMvCpfData.map(cpfValue => cpfValue)

        // Convert Mv List to Set
        const mvCpfSetData = new Set(jsonRawMvCpfDataMapped) 

        // Check and Update if Necessary
        for (const localCpf of jsonRawLocalCpfDataMapped) {
            // CPF Found on MV list \/
            if(mvCpfSetData.has(localCpf)) { 
                console.log(`Cpf encontrado em ambas as Listas: ${localCpf}`)

                const rawIsFirstLogin = await fetch(`${cpfMvApiUrlRegisters}/${localCpf}`)
                const jsonRawIsFirstLogin = await rawIsFirstLogin.json()
                // console.log(jsonRawIsFirstLogin)
                const jsonRawIsFirstLoginFiltered = jsonRawIsFirstLogin
                .filter(filtered => filtered.SN_SENHA_PLOGIN === 'N')

                if(jsonRawIsFirstLoginFiltered.length > 0  ){
                    fetch(`http://192.168.2.214:8059/api/form/cpf/${localCpf}`, {
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json', }, 'body': JSON.stringify({ IS_FIRST_LOGIN:'1'}),
                    }) // End Fetch
                } // End if jsonRawIsFirstLogin
            } else {
                console.log(`Cpf não encontrado na Lista MV: ${localCpf}`)
            } // End If
        }// End For Each
    } catch (error) {console.error(error)} // End Catch
} //End CheckCpfIsfirstLogin


module.exports = { CheckCpfIsCreated,
                   CheckCpfIsfirstLogin }
