/////Achtergrond/////
function changeBG() {

   const section = document.getElementById('background');

   var timeOfDay = new Date(); // Maakt een datum object aan
   var hour = timeOfDay.getHours(); // Haalt de uren op
   var note = document.getElementById("message"); // Dagfase tekst element
   var todo = document.getElementById("todolist"); // Do do list element
   var todo2 = document.getElementById("todolist2");
   var Background = document.getElementById("Body"); // Haalt het html element op


   if (hour >= 6 && hour < 12) { // van 6 tot 12 uur heb ik de ochtend geplaatst 
      Background.classList.add("BgMorning"); // Plaatst een nieuwe class
      Background.classList.remove("BgNight"); // Haalt oude class weg
      note.innerText = "Good Morning!" // Dagfase bericht
      todo.innerText = "Wake Up" // Bericht op de to list
      todo2.innerText = "Eat breakfast"
   }

   else if (hour >= 12 && hour < 6) {// van 6 tot 12 uur heb ik de middag geplaatst 
      Background.classList.add("BgDay"); // Plaatst een nieuwe class
      Background.classList.remove("BgNight"); // Haalt oude class weg
      note.innerText = "Good Afternoon!" // Dagfase bericht
      todo.innerText = "Work" // Bericht op de to list
      todo2.innerText = "Eat Lunch"
   }

   else if (hour >= 6 && hour < 24) { // van 6 tot 24 uur heb ik de avond geplaatst 
      Background.classList.add("BgEvening"); // Plaatst een nieuwe class
      Background.classList.remove("BgDay"); // Haalt oude class weg
      note.innerText = "Good Evening!" // Dagfase bericht
      todo.innerText = "Work Out" // Bericht op de to list
      todo2.innerText = "Eat Dinner"
   }

   else { // van 24 tot 6 uur heb ik de nacht geplaatst 
      Background.classList.add("BgNight"); // Plaatst een nieuwe class
      Background.classList.remove("BgEvening"); // Haalt oude class weg
      note.innerText = "Good Night!" // Dagfase bericht
      todo.innerText = "Check Course" // Bericht op de to list
      todo2.innerText = "Go To Bed"
   }

}

changeBG();
//////////////////////////////////////////////////////////////////////////////////////////////

let timeDiv = document.querySelector("#time");
let timeElement = document.createElement("h2");
timeDiv.appendChild(timeElement);


/////Tijd//////
function showTime() { //functie voor tijd
   var date = new Date();
   var h = date.getHours(); // Uren
   var m = date.getMinutes(); // Minuten
   var s = date.getSeconds();  // Seconden
   var session = "AM";

   // zorgt er voor dat de variablen goed achter elkaar komen
   if (h == 0) {
      h = 12;
   }

   if (h > 12) {
      h = h - 12;
      session = "PM";
   }

   h = (h < 10) ? "0" + h : h;
   m = (m < 10) ? "0" + m : m;
   s = (s < 10) ? "0" + s : s;

   var time = h + ":" + m + ":" + s + " " + session;
   timeElement.innerHTML = time;

   setTimeout(showTime, 1000); // Laat het animeren
}

showTime();
//////////////////////////////////////////////////////////////////////////////////////////////