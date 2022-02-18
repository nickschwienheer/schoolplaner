
function addSubject(sub){
    document.getElementById("subjectSelector").style.display = "block";
    sessionStorage.setItem("sub", sub);
       
    
    }
    
    function add(){
        var timetable = JSON.parse(localStorage.getItem("timetable"));
        let sub = sessionStorage.getItem("sub");
        let subject = document.getElementById("subjectSelectorField").value;
        timetable[sub] = subject;
        localStorage.setItem("timetable", JSON.stringify(timetable));
        document.getElementById("subjectSelector").style.display = "none";
        let name = parseInt(sub) + 1 + "$"
        document.getElementById(name).innerHTML = subject;
    
        
    
    
    }