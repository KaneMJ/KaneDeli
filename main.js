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
    inputValidation();
}

function inputValidation() {
    let sammyName = document.getElementById("sammyName").value;
    console.log(sammyName);
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

