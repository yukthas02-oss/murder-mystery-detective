const startButton = document.getElementById("startButton");
const story = document.getElementById("story");
const gameArea = document.getElementById("gameArea");

const knifeButton = document.getElementById("knifeBtn");
const phoneButton = document.getElementById("phoneBtn");
const shoeButton = document.getElementById("shoeBtn");

const notebook = document.getElementById("notebook");

gameArea.style.display = "none";

let knifeCollected = false;
let phoneCollected = false;
let shoeCollected = false;


startButton.addEventListener("click",startInvestigation);

knifeButton.addEventListener("click", inspectKnife);
phoneButton.addEventListener("click",inspectPhone);
shoeButton.addEventListener("click",inspectShoe);

function startInvestigation(){
    story.textContent = "A wealthy business man has been murdered in his mansion. Search for clues and uncover the truth! ";

    startButton.style.display = "none";
    gameArea.style.display = "block";
  
}

function inspectKnife() {

         notebook.innerHTML += `
        <hr>
        <h4>🔪 Bloody Knife</h4>
        <ul>
            <li>Fingerprints have been wiped clean.</li>
        </ul>
    `;
    }




function inspectPhone(){
    
    
     notebook.innerHTML += `
        <hr>
        <h4>📱 Victim's Phone</h4>
        <ul>
            <li>All the data has been cleared.</li>
        </ul>
    `;
}

function inspectShoe() {
    

     notebook.innerHTML += `
        <hr>
        <h4>📱 Victim's Phone</h4>
        <ul>
            <li>All the data has been cleared.</li>
        </ul>
    `;
}



