const data = {
    access: `ACCESS LOG - DAY 1
----------------------------------------
Aug 9, 23:47 - Eric Lamont - Archive Room
Aug 10, 02:15 - Marcus Penn - Archive Room
Aug 10, 03:03 - Cynthia Rhee - Archive Room
Aug 10, 07:18 - Rachel Corbin - Archive Room`,
    email: `EMAIL METADATA - DAY 1
----------------------------------------
Aug 10, 07:24 AM - Unknown -> Encrypted External`,
    expenses: `EXPENSE REPORT - DAY 1
----------------------------------------
Cynthia Rhee - Round-trip flight to Atlanta - $947.30 - NOT APPROVED`,
    interviews: `INTERVIEW NOTES - DAY 1
----------------------------------------
"I saw Torres with a burn folder. He tucked it into a floorboard."`
};

let day = 1;
let actionsRemaining = 3;

function loadData(type) {
    if (actionsRemaining <= 0) {
        alert("No actions remaining. End your turn.");
        return;
    }
    document.getElementById("data-display").textContent = data[type];
    actionsRemaining -= 1;
    document.getElementById("actions").textContent = actionsRemaining;
}

function endTurn() {
    day += 1;
    actionsRemaining = 3;
    document.getElementById("day").textContent = day;
    document.getElementById("actions").textContent = actionsRemaining;
    document.getElementById("data-display").textContent = "Select a data type to begin...";
    alert("Turn ended. Day " + day + " begins.");
}
