

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

