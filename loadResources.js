
var timetable = JSON.parse(localStorage.getItem("timetable"));

document.getElementById("1").innerHTML = timetable[0];
document.getElementById("2").innerHTML = timetable[1];
document.getElementById("3").innerHTML = timetable[2];
document.getElementById("4").innerHTML = timetable[3];
document.getElementById("5").innerHTML = timetable[4];
document.getElementById("6").innerHTML = timetable[5];
document.getElementById("7").innerHTML = timetable[6];
document.getElementById("8").innerHTML = timetable[7];
document.getElementById("9").innerHTML = timetable[8];
document.getElementById("10").innerHTML = timetable[9];
document.getElementById("11").innerHTML = timetable[10];
document.getElementById("12").innerHTML = timetable[11];
document.getElementById("13").innerHTML = timetable[12];
document.getElementById("14").innerHTML = timetable[13];
document.getElementById("15").innerHTML = timetable[14];
document.getElementById("16").innerHTML = timetable[15];
document.getElementById("17").innerHTML = timetable[16];
document.getElementById("18").innerHTML = timetable[17];
document.getElementById("19").innerHTML = timetable[18];
document.getElementById("20").innerHTML = timetable[19];
document.getElementById("21").innerHTML = timetable[20];
document.getElementById("22").innerHTML = timetable[21];
document.getElementById("23").innerHTML = timetable[22];
document.getElementById("24").innerHTML = timetable[23];
document.getElementById("25").innerHTML = timetable[24];
document.getElementById("26").innerHTML = timetable[25];
document.getElementById("27").innerHTML = timetable[26];
document.getElementById("28").innerHTML = timetable[27];
document.getElementById("29").innerHTML = timetable[28];
document.getElementById("30").innerHTML = timetable[29];
document.getElementById("31").innerHTML = timetable[30];
document.getElementById("32").innerHTML = timetable[31];
document.getElementById("33").innerHTML = timetable[32];
document.getElementById("34").innerHTML = timetable[33];
document.getElementById("35").innerHTML = timetable[34];
document.getElementById("36").innerHTML = timetable[35];
document.getElementById("37").innerHTML = timetable[36];
document.getElementById("38").innerHTML = timetable[37];
document.getElementById("39").innerHTML = timetable[38];
document.getElementById("40").innerHTML = timetable[39];
document.getElementById("41").innerHTML = timetable[40];
document.getElementById("42").innerHTML = timetable[41];
document.getElementById("43").innerHTML = timetable[42];
document.getElementById("44").innerHTML = timetable[43];
document.getElementById("45").innerHTML = timetable[44];


document.getElementById("1$").innerHTML = timetable[0];
document.getElementById("2$").innerHTML = timetable[1];
document.getElementById("3$").innerHTML = timetable[2];
document.getElementById("4$").innerHTML = timetable[3];
document.getElementById("5$").innerHTML = timetable[4];
document.getElementById("6$").innerHTML = timetable[5];
document.getElementById("7$").innerHTML = timetable[6];
document.getElementById("8$").innerHTML = timetable[7];
document.getElementById("9$").innerHTML = timetable[8];
document.getElementById("10$").innerHTML = timetable[9];
document.getElementById("11$").innerHTML = timetable[10];
document.getElementById("12$").innerHTML = timetable[11];
document.getElementById("13$").innerHTML = timetable[12];
document.getElementById("14$").innerHTML = timetable[13];
document.getElementById("15$").innerHTML = timetable[14];
document.getElementById("16$").innerHTML = timetable[15];
document.getElementById("17$").innerHTML = timetable[16];
document.getElementById("18$").innerHTML = timetable[17];
document.getElementById("19$").innerHTML = timetable[18];
document.getElementById("20$").innerHTML = timetable[19];
document.getElementById("21$").innerHTML = timetable[20];
document.getElementById("22$").innerHTML = timetable[21];
document.getElementById("23$").innerHTML = timetable[22];
document.getElementById("24$").innerHTML = timetable[23];
document.getElementById("25$").innerHTML = timetable[24];
document.getElementById("26$").innerHTML = timetable[25];
document.getElementById("27$").innerHTML = timetable[26];
document.getElementById("28$").innerHTML = timetable[27];
document.getElementById("29$").innerHTML = timetable[28];
document.getElementById("30$").innerHTML = timetable[29];
document.getElementById("31$").innerHTML = timetable[30];
document.getElementById("32$").innerHTML = timetable[31];
document.getElementById("33$").innerHTML = timetable[32];
document.getElementById("34$").innerHTML = timetable[33];
document.getElementById("35$").innerHTML = timetable[34];
document.getElementById("36$").innerHTML = timetable[35];
document.getElementById("37$").innerHTML = timetable[36];
document.getElementById("38$").innerHTML = timetable[37];
document.getElementById("39$").innerHTML = timetable[38];
document.getElementById("40$").innerHTML = timetable[39];
document.getElementById("41$").innerHTML = timetable[40];
document.getElementById("42$").innerHTML = timetable[41];
document.getElementById("43$").innerHTML = timetable[42];
document.getElementById("44$").innerHTML = timetable[43];

document.getElementById("homeworkField").innerHTML = localStorage.getItem("homework");

document.getElementById("homework").innerHTML = localStorage.getItem("homework");

loadEvents();
function loadEvents(){
document.getElementById("event0").innerHTML = localStorage.getItem("event0");
document.getElementById("event1").innerHTML = localStorage.getItem("event1");
document.getElementById("event2").innerHTML = localStorage.getItem("event2");
document.getElementById("event3").innerHTML = localStorage.getItem("event3");
document.getElementById("event4").innerHTML = localStorage.getItem("event4");
document.getElementById("event5").innerHTML = localStorage.getItem("event5");
document.getElementById("event6").innerHTML = localStorage.getItem("event6");
document.getElementById("event7").innerHTML = localStorage.getItem("event7");
document.getElementById("event8").innerHTML = localStorage.getItem("event8");
document.getElementById("event9").innerHTML = localStorage.getItem("event9");
document.getElementById("event10").innerHTML = localStorage.getItem("event10");
document.getElementById("event11").innerHTML = localStorage.getItem("event11");
document.getElementById("event12").innerHTML = localStorage.getItem("event12");
document.getElementById("event13").innerHTML = localStorage.getItem("event13");
document.getElementById("event14").innerHTML = localStorage.getItem("event14");
document.getElementById("event15").innerHTML = localStorage.getItem("event15");
document.getElementById("event16").innerHTML = localStorage.getItem("event16");
document.getElementById("event17").innerHTML = localStorage.getItem("event17");
document.getElementById("event18").innerHTML = localStorage.getItem("event18");
document.getElementById("event19").innerHTML = localStorage.getItem("event19");
document.getElementById("event20").innerHTML = localStorage.getItem("event20");



document.getElementById("events").innerHTML = 
localStorage.getItem("event0") +
 localStorage.getItem("event1") +
 localStorage.getItem("event2")+
 localStorage.getItem("event3")+
 localStorage.getItem("event4")+
 localStorage.getItem("event5")+
 localStorage.getItem("event6")+
 localStorage.getItem("event7")+
 localStorage.getItem("event8")+
 localStorage.getItem("event8")+
 localStorage.getItem("event9")+
 localStorage.getItem("event10")+
 localStorage.getItem("event11")+
 localStorage.getItem("event12")+
 localStorage.getItem("event13")+
 localStorage.getItem("event14")+
 localStorage.getItem("event15")+
 localStorage.getItem("event16")+
 localStorage.getItem("event17")+
 localStorage.getItem("event18")+
 localStorage.getItem("event19")+
 localStorage.getItem("event20")

}
