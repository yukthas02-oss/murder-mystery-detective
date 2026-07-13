const startButton = document.getElementById("startButton");
const story = document.getElementById("story");
const gameArea = document.getElementById("gameArea");
gameArea.style.display = "none";

startButton.addEventListener("click",startInvestigation);

function startInvestigation(){
    story.textContent = "A wealthy business man has been murdered in his mansion. Search for clues and uncover the truth! ";

    startButton.style.display = "none";
    gameArea.style.display = "block";
  
}
const knifeButton = document.getElementById("knifeBtn");
const notebook = document.getElementById("notebook");
knifeButton.addEventListener("click", inspectKnife);

function inspectKnife() {

    notebook.textContent =
        "Evidence Collected\n\n.... Bloody Knife\nThe fingerprints have been wiped clean.";

}
const phoneButton = document.getElementById("phoneBtn");
phoneButton.addEventListener("click",inspectPhone);

function inspectPhone(){
    notebook.textContent = "Evidence Collected\n\n....Victim's Phone\nAll the Data has been cleared.";
}
const shoeButton = document.getElementById("shoeBtn");
shoeButton.addEventListener("click",inspectShoe);

function inspectShoe() {
    notebook.textContent = "Evidence Collected\n\n....Victim'm Shoe\nNo fingerprints found"
}