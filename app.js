window.document.addEventListener("DOMContentLoaded", clock, false);
function clock()
{
   const date = new Date();
   const hours = date.getHours();
   const mins = date.getMinutes();
   const rotateHourPointer = document.getElementById("hour-pointer");
   rotateHourPointer.style.transform = `rotate(${30 * hours}deg)`;
   const rotateMinPointer = document.getElementById("min-pointer");
   rotateMinPointer.style.transform = `rotate(${6 * mins}deg)`;
}

setInterval("clock()", 1000);

