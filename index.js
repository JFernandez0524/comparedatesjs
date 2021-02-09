/* function square(number) {
   return number * number;
    
}
let number = square(12);
console.log(number);

//document.getElementById("santa").addEventListener("load", santaEmoji);

window.onload = document.getElementById('santa').innerHTML =`<h1>This is Written using string literals with HTML \uD83C\uDF85<h1/> `; */

let videoDisappear = document.querySelector("#videoEmbed");

let setDate = new Date("Feb 10 2021");
let currentDate = new Date();
console.log(setDate.getTime());
console.log(currentDate.getTime());
if ( currentDate.getTime() < setDate.getTime()) {
   /* alert("Sorry it's  too late") */
   disableVideo();
} console.log("you still have time");


function disableVideo() {
   videoDisappear.style.display="none";
   document.querySelector("#errorMessage").innerHTML = "You have no time to watch this video";
}

