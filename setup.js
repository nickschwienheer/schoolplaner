
function setUp(){
    if(localStorage.hasOwnProperty("setUp")){

    }else{
    localStorage.setItem("setUp", 0);
    }
    let setUp = parseInt(localStorage.getItem("setUp"));


switch(setUp){
    case 0: document.getElementById("configuration1").style.display = "block";
            break;

    case 1: document.getElementById("configuration2").style.display = "block";
            document.getElementById("configuration1").style.display = "none";
            break;

    case 2: document.getElementById("configuration3").style.display = "block";
            document.getElementById("configuration2").style.display = "none";
            break;

   

    }      
}






function further(){
    let key = localStorage.getItem("key");
    firebase.database().ref(key).push().set({
        "key" : key,
        "timetable": JSON.stringify(localStorage.getItem("timetable"))
    });
    localStorage.setItem("setUp", "2")
    document.getElementById("configuration3").style.display = "block";
    document.getElementById("configuration2").style.display = "none";
    let count = 1;
setTimeout(function(){
    checkHWExisting();
function checkHWExisting(){
if(localStorage.hasOwnProperty("hw" + count)){
    count ++;
    checkHWExisting();
}else{
if(count <= 20){
localStorage.setItem("hw" + count, " ");
count++
checkHWExisting();
}
}
}
},1000);
}

function finishConfig(){
    localStorage.setItem("setUp", "established");
    document.getElementById("configuration3").style.display = "none";
    start();
    location.reload();
      
    
}
