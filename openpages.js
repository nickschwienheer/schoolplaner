function menuDropOut(){
   if(document.getElementById("menu").style.display == "none"){
     document.getElementById("menu").style.display = "block";
   }else{
     document.getElementById("menu").style.display= "none";
   }
}


function buyAccess(){
  window.open("nbs-web.netlify.app/planer.html");
  }   
  
  


function openTimetable(){
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


function openCalculator(){
  document.getElementById("calcField").style.display = "block";
}
function backFromCalculator(){
  document.getElementById("calcField").style.display = "none";
}

function back(){
  document.getElementById("learningPage").style.display = "none";
}


function openIndexCards(){
  document.getElementById("indexCards").style.display = "block";
}


function closeAddCardMode(){
  document.getElementById("indexCards").style.display = "none";
}

function openLearningPage(){
  document.getElementById("learningPage").style.display = "block";
}