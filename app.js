async function getResult(element) {
    console.log("getResult method called");
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let buttonId = element.id;
    
    // const server = "https://localhost:8080/v1/"
    const server = "https://my-calculator-service.herokuapp.com/v1";
    const urlParams = "?num1="+num1+"&num2="+num2;
    let url;
    switch (buttonId) {
        case 'add': url = server + "add" + urlParams;
            break;
        case 'diff': url = server + "sub" + urlParams;
            break;
        case 'mul': url = server + "mul" + urlParams;
            break;
        case 'div': url = server + "div" + urlParams;
            break;
    }
    console.log("request sent to server :  " + url );
    
   var response = await fetch(url);
   var output = await response.json();
    console.log(output);
    if (output['errors'].length > 0) {
        document.getElementById("result").innerHTML = "Please enter valid input";
    }
    else {
        document.getElementById("result").innerHTML = output['result'];
    }
}
