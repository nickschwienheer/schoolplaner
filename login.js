
function login(){
    let key = document.getElementById("key").value;
    if(key == ""){         
    document.getElementById("fail").innerHTML = "Die Felder dürfen nicht leer sein";
    }
    
    
    firebase.database().ref(key).on("child_added", function (snapshot) {
    let key =  snapshot.val().key;
    let timetableDB =  snapshot.val().timetable;
    console.log(key);
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("key", key);
    sessionStorage.setItem("check", true);

    if(timetableDB == undefined){
        var timetable = ["", "", "", "", "","", "", "", "", "","", "", "", "", "","", "", "", "", "","", "", "", "", "","", "", "", "", "","", "", "", "", "","", "", "", "", "","", "", "", "", "",];
        localStorage.setItem("timetable", JSON.stringify(timetable));
    }else{

   
        localStorage.setItem("timetable", JSON.parse(timetableDB));
        }



    localStorage.setItem("setUp", "1");
    location.reload();
    
    });
    
    if(sessionStorage.hasOwnProperty("check")){
    
    }else{
    document.getElementById("fail").innerHTML = "Dieses Konto existiert möglicherweise nicht oder das Passwort ist falsch";
    }
    }