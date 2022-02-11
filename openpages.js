function menuDropOut(){
   if(document.getElementById("menu").style.display == "none"){
     document.getElementById("menu").style.display = "block";
   }else{
     document.getElementById("menu").style.display= "none";
   }
}



function timetable(){
    document.getElementById("configuration2").style.display = "block";
}



function openHomeworkMode(){
    document.getElementById("addHomeworkField").style.display = "block"
}


function backFromHomework(){
    location.reload();
}

function openUpdateMode(){
  document.getElementById("updater").style.display = "block";
}
function leaveUpdateMode(){
  document.getElementById("updater").style.display = "none";
  document.getElementById("menu").style.display = "none";
}

function openEventsMode(){
  document.getElementById("addEventsField").style.display = "block"
}