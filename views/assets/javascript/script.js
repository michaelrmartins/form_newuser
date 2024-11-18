function enableFields () {
    console.log("cliked...")
    const inputList = document.querySelectorAll("input, select");
    console.dir(inputList);
    inputList.forEach(id => {
        id.removeAttribute("disabled")
        
    });
}


function showMessage(parameterField, textMessage) {
    console.log(parameterField)
    console.log(textMessage)
    // const parameterField = parameterField;
    // const textMessage = textMessage;
    document.getElementById(parameterField).innerHTML = textMessage
}

function changeFieldStyle(parameterField){
    document.getElementById(parameterField).style.backgroundColor = "red";
}