 const Clocks = document.querySelector(".clock");

 function runclock(){

var time = new Date();
var hr = time.getHours();
var minuts = time.getMinutes();
var sec = time.getSeconds();
var txt = "AM";
if(hr>12){
    hr = hr-12;
    txt = "PM";
}else if(hrs==0){
    hrs=12;
    txt="AM";
}

hr = hr<10?"0"+hr:hr;
minuts = minuts<10?"0"+minuts:minuts;
sec   = sec<10?"0"+sec:sec;

Clocks.innerHTML =`${hr} : ${minuts} : ${sec} ${txt}`;

 }
 runclock();
 setInterval(runclock,1000);





