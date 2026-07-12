const startButton = document.getElementById("startButton");
const story = document.getElementById("story");

startButton.addEventListener("click",startInvestigation);

function startInvestigation(){
    story.textContent = "A wealthy business man has been murdered in his mansion. Search for clues and uncover the truth! ";

    startButton.style.display = "none";
}
