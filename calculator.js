       
function appendOperation(operation){
    document.getElementById("resultArea").innerHTML += operation
}

function setNull(){
     document.getElementById("resultArea").innerHTML = " "
}

function calculate(){
     var container = document.getElementById("resultArea")
     var result = eval(container.innerHTML);
     container.innerHTML = result;

    

}