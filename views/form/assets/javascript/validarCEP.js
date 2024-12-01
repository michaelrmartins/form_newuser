// Show info about BR CEP
// Using ViaCep API
// Michael Martins - 2024
// uses: Call API URL sending Cep Number - https://viacep.com.br/ws/28013090/json <  Example

const APIUrl = 'https://viacep.com.br/ws/'

async function getCepData(cep) {

    try {
        loadedCepData = await fetch(`${APIUrl}${cep}/json`)
        loadedCepDataJson = await loadedCepData.json();

        if(loadedCepDataJson.erro) {
            return {erro: "invalid cep"}}
            // console.log("Invalid CEP")}
            else {

                //console.log(loadedCepDataJson);
                return loadedCepDataJson;
            }

    } // end Try
    catch(error) {
        console.log("Invalid value Format")
        return {msg: "invalid value format"}}
    
} // End getCepData