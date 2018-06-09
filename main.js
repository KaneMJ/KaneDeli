$(document).ready(initializeApp);

const itemAdd = {
    value: 4
};

function initializeApp() {
    console.log('Say Something');
    attachHandlers();
}

function attachHandlers() {
    console.log('Handlers are attached');
    $('#submitEntry').click(submitAction);
    $('#addItem').click(addItem);
}

function submitAction() {
    addSammy();
}

function addSammy(){
    let ingredients = [];
    for(let i = 1; i <= 3; i++){
        ingredients.push(document.getElementById(`type${i}`).value);
        ingredients.push(document.getElementById(`type${i}text`).value);
    }
    let sammy = {
        "sammyName": document.getElementById("sammyName").value,
        "breadType": document.getElementById("breadType").value,
        "sammyStyle": document.getElementById("sammyStyle").value,
        "sammyArray": [
            {[ingredients[0]]: ingredients[1]},
            {[ingredients[2]]: ingredients[3]},
            {[ingredients[4]]: ingredients[5]},
        ]
    };
    for(let x = 5; x < ingredients.length - 5; x+=2){
        let key = ingredients[x];
        let value= ingredients[x+1];
        sammy.sammyArray.push({[key] : value});
        console.log("I ran");
    };
    console.log(sammy);
}

function addItem() {
    currentValue = itemAdd.value;
    itemAdd.value++;
    //Select target and create new items
    let target = document.querySelector('.options');
    let header = document.createElement('div');
    header.classList.add('ingredientType');

    //Select Element
    let select = document.createElement('select');
    select.setAttribute('name', `ingredient${currentValue}type`);

    //Option Element
    let optionSauce = document.createElement('option');
    optionSauce.setAttribute('value', 'sauce');
    optionSauce.innerHTML = 'Sauce';
    let optionIngredient = document.createElement('option');
    optionIngredient.setAttribute('value', 'ingredient');
    optionIngredient.innerHTML = 'Ingredient';
    let optionOther = document.createElement('option');
    optionOther.setAttribute('value', 'other');
    optionOther.innerHTML = 'Other';

    //Input Area
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', `ingredient${currentValue}`);
    input.classList.add('ingredInput');

    //Now append our new items, this is the fun part.
    header.appendChild(select);
    header.appendChild(input);
    select.appendChild(optionSauce);
    select.appendChild(optionIngredient);
    select.appendChild(optionOther);
    target.parentNode.insertBefore(header, target);
}

