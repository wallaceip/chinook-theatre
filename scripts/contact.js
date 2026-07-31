/* ============================================================
   Chinook Theatre — Contact page  |  STARTER
   CPRG 213 — Web Development 1

   YOUR NAME: Wallace Ip

   Goal: when the visitor clicks the "Send message" button, replace the
   whole contact panel with a single line that says
   "Thank you for your message!" shown in 24px text.

   Work through the STEPS below. Replace each TODO with your code.
   ============================================================ */


/* ---------- STEP 1: create your variables ---------- */
// You need references to two elements (use "const"):
//   - the submit button   (id="submit-button")
//   - the contact panel    (id="contact-page")  <- this is the <main>
//
// TODO: create those two variables here.
const submitButton = document.getElementById("submit-button");
const contactPage  = document.getElementById("contact-page");


/* ---------- STEP 2: handle the click ---------- */
// Add a "click" listener to the submit button. The handler receives the
// event, so write it as:   function (event) { ... }
//
// Inside the handler:
//   a. Call event.preventDefault();  — this stops the form from trying to
//      reload the page, which would undo your work.
//   b. Replace the panel's contents with one paragraph. The simplest way:
//        contactPage.innerHTML = "<p>Thank you for your message!</p>";
//   c. Make the text 24px. Two options — pick ONE:
//        contactPage.style.fontSize = "24px";
//      OR add a CSS class with contactPage.classList.add(...).
//
// TODO: write the click listener here.
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  contactPage.innerHTML = "<p>Thank you for your message!</p>";
  contactPage.style.fontSize = "24px";
});


