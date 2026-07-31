/* ============================================================
   Chinook Theatre — Tickets page  |  STARTER
   CPRG 213 — Web Development 1

   YOUR NAME: Wallace Ip

   The HTML and CSS are already built for you. Your job is to write the
   JavaScript in THIS file so the Tickets page works like this:

     1. Clicking a night (Wed–Sun) selects it (it turns teal). Clicking it
        again unselects it (it turns white again).
     2. Choosing "General" sets the price to $25 per night; choosing "VIP"
        sets it to $50 per night. Only one can be selected at a time.
     3. The total ($<span id="total-cost">) always shows nights × price.
     4. "clear nights" unselects every night and sets the total back to 0.

   The CSS already has a class called ".clicked" that turns an element teal.
   Your JavaScript's job is to ADD and REMOVE that class at the right times,
   keep a running count of the nights, and update the total.

   Work through the STEPS below in order. Replace each TODO with your code.
   ============================================================ */


/* ---------- STEP 1: create your variables ---------- */
// You need two pieces of information that CHANGE while the page is used,
// so use "let" for these:
//   - ratePerNight : the price of one night. General is selected by
//                    default in the HTML, so start this at 25.
//   - nightsSelected : how many nights are chosen right now. Start at 0.
//
// TODO: declare those two variables here.
let ratePerNight = 25;
let nightsSelected = 0;

// You also need references to the elements on the page. These do NOT
// change, so use "const". You need:
//   - all five night <li> elements. Grab them all at once with:
//        const nightList = document.querySelectorAll(".day-selector li");
//   - the "general" element        (id="general")
//   - the "vip" element            (id="vip")
//   - the "clear-button" element   (id="clear-button")
//   - the "total-cost" <span>      (id="total-cost")
//
// TODO: create those element variables here.
const nightList = document.querySelectorAll(".day-selector li");
const generalButton = document.getElementById("general");
const vipButton = document.getElementById("vip");
const clearButton = document.getElementById("clear-button");
const totalCost = document.getElementById("total-cost");


/* ---------- STEP 2: a function that shows the total ---------- */
// Create a function called calculateTotal(). Inside it, set the
// total-cost element's .innerHTML to  nightsSelected * ratePerNight.
//
// TODO: write the calculateTotal function here.
function calculateTotal() {
  totalCost.innerHTML = nightsSelected * ratePerNight;
}


/* ---------- STEP 3: make each night clickable ---------- */
// You need to run the SAME code for every night, so loop over nightList
// with .forEach() and add a "click" listener to each one. Inside the
// click handler, check whether that night is already selected:
//
//   if (night.classList.contains("clicked")) {
//        // it is ON  -> remove "clicked" and subtract 1 from nightsSelected
//   } else {
//        // it is OFF -> add "clicked" and add 1 to nightsSelected
//   }
//
// Then call calculateTotal() so the number on screen updates.
//
// TODO: write the forEach loop with the click listener here.
nightList.forEach(function (night) {
  night.addEventListener("click", function () {
    if (night.classList.contains("clicked")) {
      // remove "clicked" and subtract 1 from nightsSelected
      night.classList.remove("clicked");
      nightsSelected -= 1;
    } else {
      // add "clicked" and add 1 to nightsSelected
      night.classList.add("clicked");
      nightsSelected += 1;
    }
    calculateTotal();
  });
});



/* ---------- STEP 4: the clear button ---------- */
// Add a "click" listener to clearButton. When it runs:
//   - loop over nightList and remove "clicked" from every night
//   - set nightsSelected back to 0
//   - call calculateTotal()
//
// TODO: write the clear-button listener here.
clearButton.addEventListener("click", function () {
  nightList.forEach(function (night) {
    // remove "clicked" from this night
    night.classList.remove("clicked");
  });
  nightsSelected = 0;
  calculateTotal();
});



/* ---------- STEP 5: choose the rate (General / VIP) ---------- */
// Add a "click" listener to generalButton. When it runs:
//   - set ratePerNight to 25
//   - add "clicked" to generalButton
//   - remove "clicked" from vipButton
//   - call calculateTotal()
//
// Then do the same for vipButton, but set ratePerNight to 50 and swap
// which element gets "clicked".
//
// TODO: write both rate listeners here.
generalButton.addEventListener("click", function () {
  ratePerNight = 25;
  generalButton.classList.add("clicked");
  vipButton.classList.remove("clicked");
  calculateTotal();
});

// now write the vipButton listener the same way, using 50
vipButton.addEventListener("click", function () {
  ratePerNight = 50;
  generalButton.classList.remove("clicked");
  vipButton.classList.add("clicked");
  calculateTotal();
});

