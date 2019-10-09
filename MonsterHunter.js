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

container.appendChild(mhHeader);
mhHeader.appendChild(mhHeaderText);
container.appendChild(randomizerOptionsContainer);
randomizerOptionsContainer.appendChild(randomizeButton);
randomizeButton.appendChild(rndButtonLabel);
container.appendChild(mhAnswerDiv);
mhAnswerDiv.appendChild(mhAnswerText);

function choices(){
    var items = document.getElementsByName('choice');
    var selectedItems = [];
    for(var i = 0; i < items.length; i++){
        if(items[i].type == 'checkbox' && items[i].checked == true)
            selectedItems.push(items[i].value);
        }
        let selected = selectedItems[Math.floor(Math.random() * selectedItems.length)];

        mhAnswerText.textContent = selected;
}




//visual randomization?????
// function needs to grab inputs put in a list randomize list spit one