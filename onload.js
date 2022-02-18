
onLoad()
function onLoad(){
if(localStorage.hasOwnProperty("key") && localStorage.getItem("setUp") ==  "established"){
        start();
}else{
        setUp();
}

}

let count = 0;


function start(){
if(localStorage.hasOwnProperty("event" + count)){
count++
start();
}else{
        if(count <= 20){


localStorage.setItem("event" + count, " ")
count++
start();
}
}
}