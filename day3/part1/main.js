let input;

let alphabet = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'];
let duplicateItems = [];

let prioritiesTotal = 0;

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                input = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}

function solveDay3(){
    let inputArrays;
    readTextFile("./data.txt");

    //Make arrays from strings
    inputArrays = input.split('\n')

    //Let's get our duplicates
    inputArrays.forEach(inventory => {
        duplicateItems.push(checkRucksack(inventory));
    });

    //We have our duplicates, now let's calculate their priorities
    sumPriorities();
    
    return prioritiesTotal;
}

function checkRucksack(inventory){
    let compartmentOne = inventory.substring(0, inventory.length / 2);
    let compartmentTwo = inventory.substring(inventory.length / 2, inventory.length);

    console.log(inventory, compartmentOne, compartmentTwo);

    for(let i = 0; i < compartmentOne.length; i++){
        for(let j = 0; j < compartmentTwo.length; j++){
            if(compartmentOne[i] === compartmentTwo[j]){
                return compartmentOne[i];
            }
        }
    }
}

function sumPriorities(){
    duplicateItems.forEach(item => {
        prioritiesTotal += (alphabet.indexOf(item) + 1);
    })
}

console.log(solveDay3());