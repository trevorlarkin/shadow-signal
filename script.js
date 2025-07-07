const data = {
    day1: {
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
    },
    day2: {
        access: `ACCESS LOG - DAY 2
----------------------------------------
Aug 11, 01:05 - Marcus Penn - Secure Server Room
Aug 11, 08:46 - Rachel Corbin - Comms Hub
Aug 11, 09:12 - Eric Lamont - Medical Bay`,
        email: `EMAIL METADATA - DAY 2
----------------------------------------
Aug 11, 06:17 AM - Corbin -> Lamont: "Re: Meeting"
Aug 11, 09:38 AM - anonymous@securemail.cc -> REDACTED`,
        expenses: `EXPENSE REPORT - DAY 2
----------------------------------------
Jason Torres - External Hard Drive (256GB) - $189.99 - PENDING`,
        interviews: `INTERVIEW NOTES - DAY 2
----------------------------------------
"Lamont claims he was approached to 'test internal comms firewall.'"
"Torres asked if surveillance includes non-verbal facial scans."`
    }
};
day3: {
        access: `ACCESS LOG - DAY 3
let day = 1;
let actionsRemaining = 3;
let toolsUsed = [];

function loadData(type) {
    if (actionsRemaining <= 0) {
        alert("No actions remaining. End your turn.");
        return;
    }
    const dayKey = "day" + day;
    document.getElementById("data-display").textContent = data[dayKey][type];
    actionsRemaining -= 1;
    updateStats();
}

function useTool(tool) {
    if (actionsRemaining <= 0) {
        alert("No actions remaining. End your turn.");
        return;
    }
    if (toolsUsed.includes(tool)) {
        alert("Tool already used today.");
        return;
    }

    let message = "";
    switch (tool) {
        case "bug":
            message = "BUG OFFICE DEPLOYED: Audio confirms Torres entered archive off-camera.";
            break;
        case "tap":
            message = "PHONE TAP ACTIVE: Corbin mentions 'phase two' in a call to unknown number.";
            break;
        case "interview":
            message = "AGENT INTERVIEW: Penn seemed nervous when asked about access to server room.";
            break;
    }

    toolsUsed.push(tool);
    actionsRemaining -= 1;
    updateStats();

    const display = document.getElementById("data-display");
    display.textContent += `\n\n[TOOL RESULT]\n${message}`;
}

function updateStats() {
    document.getElementById("actions").textContent = actionsRemaining;
    document.getElementById("day").textContent = day;
}

function endTurn() {
    if (day >= 3) {
        alert("This is the last available day in demo.");
        return;
    }
    day += 1;
    actionsRemaining = 3;
    toolsUsed = [];
    updateStats();
    document.getElementById("data-display").textContent = "Day " + day + " begins. Select a data type.";
}
