/*
  Duolingo Team Prototype
  ----------------------
  Your goal is NOT to copy the instructor demo.
  Your goal is to make PRODUCT DECISIONS using logic.

  Focus on:
  - conditionals
  - comparisons
  - randomness
  - feedback
*/

/*
  Duolingo Team Prototype
  ----------------------
  Your goal is NOT to copy the instructor demo.
  Your goal is to make PRODUCT DECISIONS using logic.
*/

// ==============================
// STEP 1: App State
// ==============================

let xpTotal = 0;
const xpRewards = [5, 10, 15];

// ==============================
// STEP 2: DOM Elements
// ==============================

const xpDisplay = document.getElementById("xp-total");
const button = document.getElementById("complete-lesson");
const feedback = document.getElementById("feedback");

// ==============================
// STEP 3: Event Listener
// ==============================

button.addEventListener("click", function () {

  // STEP 4: Random XP reward
const earnedXP = xpRewards[Math.floor(Math.random() * xpRewards.length)];

  xpTotal += earnedXP;
  xpDisplay.textContent = xpTotal;

  console.log(`Total XP: ${xpTotal}`);
  // STEP 5: CONDITIONAL LOGIC (YOU WRITE THIS)
  if (xpTotal< 50){
    feedback.textContent = "Great keep! Keep going!";
  }
  else if (xpTotal == 50){
    feedback.textContent = "You're doing amazing, you're halfway to the next level!";
  }
  else if (xpTotal > 50 && xpTotal < 100){
    feedback.textContent = "Wow, you're unstoppable!";
  }
  else if (xpTotal >= 100){
    feedback.textContent = "Congratulations! You've reached the next level!";
  }


  // Requirements:
  // - At least 3 user states
  // - Use comparisons
  // - Feedback must change based on progress

  // TODO:
  // if (...)
  // else if (...)
  // else (...)

});

/*
  TEAM QUESTIONS TO DISCUSS:
  --------------------------
  - Are these XP thresholds right?
  - How many learner states should exist?
  - What feels motivating vs annoying?
  - What would Duolingo want users to FEEL here?
*/
