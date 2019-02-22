/**
 * @Author: John Isaacs <john>
 * @Date:   14-Feb-192019
 * @Filename: timer.js
 * @Last modified by:   john
 * @Last modified time: 14-Feb-192019
 */

setCountdown(10, Bam);
setCountdown(15, Boom);
setCountdown(17,BigBadaBoom)

 function setCountdown(delay, callback){
   //sets an timeout delay to display a message after the set delay
   setTimeout(function() {
     // var boom = document.createTextNode("boom")
     // document.getElementById('alarm').appendChild(boom)
     // document.getElementById("alarmimage").src="alarm.jpg";
     console.log("boom")
     callback();
   }, delay*1000);

   //reduces the seconds left by 1
   var secondsleft = delay -1;
   //sets up an interval to fire every second
   var counter = setInterval(function() {

     //display the current seconds left
     // console.log(secondsleft--);
     document.getElementById('countdown').innerHTML = --secondsleft;

     //if we are at 0 stop the countdown
     if(secondsleft <=0){clearInterval(counter)}
   }, 1000);
 }
 function Bam(){
   document.getElementById('alarm').innerHTML = "<img id='alarmimage' src='alarm.jpg' />"
 }
 function Boom(){
   document.getElementById('alarm').innerHTML = "<img id='alarmimage' src='bam.jpg' />"
 }
 function BigBadaBoom(){
   document.getElementById('alarm').innerHTML = "<img id='alarmimage' src='BigBadaBoom.jpg' />"
 }
