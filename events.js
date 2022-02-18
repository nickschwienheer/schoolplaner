
function saveEvent(){
    let date = document.getElementById("date").value;
    let event = document.getElementById("Event").value;

    let count = 0;
    addingEvent();
    function addingEvent(){
            if(localStorage.getItem("event" + count) != " "){
                    count++
                    addingEvent();
            }else{
                    localStorage.setItem("event" + count, date + "<br>" + event + "<br>" + "<br>");
                    loadEvents();
            }

}
}

function removeItem(item){
    localStorage.setItem(item, " ");
    document.getElementById(item).style.display = "none";
}