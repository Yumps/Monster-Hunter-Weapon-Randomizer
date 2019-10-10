const container = document.getElementById("container");
const mhHeader = document.createElement("h1");
const mhHeaderText = document.createTextNode("Monster Hunter Randomizer");
const randomizerOptionsContainer = document.createElement("div");
const mhList = ["Sword and Shield", "Dual Blades", "Greatsword", "Long Sword", "Hammer", "Hunting Horn", "Lance", "Gun Lance", "Switch Axe", "Charge Blade", "Insect Glaive", "Light Bowgun", "Heavy Bowgun", "Bow"];
const mhAnswerDiv = document.createElement("div");
const mhAnswerText = document.createElement("p");



const randomizeButton = document.createElement("button");
randomizeButton.onclick = () => choices();
const rndButtonLabel = document.createElement("label");
rndButtonLabel.textContent = "Randomize";

mhList.forEach(item => {
    let radioButton = document.createElement("input")
    radioButton.setAttribute("name", "choice")
    radioButton.setAttribute("type", "checkbox");
    radioButton.setAttribute("value", item);
    let radioLabel = document.createElement("label")
    radioLabel.textContent = item;
    randomizerOptionsContainer.appendChild(radioLabel)
    radioLabel.appendChild(radioButton);
});

const checkAllButton = document.createElement("button");
checkAllButton.onclick = () => checkAll();
const cAButtonLabel = document.createElement("label");
cAButtonLabel.textContent = "Check All";

container.appendChild(mhHeader);
mhHeader.appendChild(mhHeaderText);
container.appendChild(randomizerOptionsContainer);
randomizerOptionsContainer.appendChild(checkAllButton);
randomizerOptionsContainer.appendChild(randomizeButton);
randomizeButton.appendChild(rndButtonLabel);
checkAllButton.appendChild(cAButtonLabel);
container.appendChild(mhAnswerDiv);
mhAnswerDiv.appendChild(mhAnswerText);

let checkboxChoices = document.getElementsByName('choice');

function choices(){
    let selectedCheckboxes = [];
    for(var i = 0; i < checkboxChoices.length; i++){
        if(checkboxChoices[i].type == 'checkbox' && checkboxChoices[i].checked == true)
            selectedCheckboxes.push(checkboxChoices[i].value);
        }
        let randomChoice = selectedCheckboxes[Math.floor(Math.random() * selectedCheckboxes.length)];

        mhAnswerText.textContent = randomChoice;
}

function checkAll() {
    for(var i = 0; i < checkboxChoices.length; i++){
        if(checkboxChoices[i].checked){
            checkboxChoices[i].checked = false;
        }
        else{
            checkboxChoices[i].checked = true;
        }
    }
}

// Create a button that will check/uncheck all
// also create a button that will randomly check some boxes
// style
