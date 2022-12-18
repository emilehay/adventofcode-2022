let input;

let alphabet = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'];
let badges = [];

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
    let inputArrays, elfGroups = [];
    readTextFile("./data.txt");

    //Make arrays from strings
    inputArrays = input.split('\n')

    //Now let's group our arrays accordingly
    for(let i = 0 ; i < inputArrays.length; i++){
        let currentGroup = [];
        if(i % 3 === 0){
            currentGroup.push(inputArrays[i]);
            currentGroup.push(inputArrays[i + 1]);
            currentGroup.push(inputArrays[i + 2]);
            elfGroups.push(currentGroup);
            currentGroup = [];
        }
    }

    //Let's get our badges
    elfGroups.forEach(group => {
        badges.push(checkRucksacks(group));
    });

    //We have our duplicates, now let's calculate their priorities
    sumPriorities();
    
    return prioritiesTotal;
}

function checkRucksacks(group){
    let ruckSackOne = group[0];
    let ruckSackTwo = group[1];
    let ruckSackThree = group[2];

    for(let i = 0; i < ruckSackOne.length; i++){
        for(let j = 0; j < ruckSackTwo.length; j++){
            for(let k = 0; k < ruckSackThree.length; k++){
                if(ruckSackOne[i] === ruckSackTwo[j] && ruckSackOne[i] === ruckSackThree[k]){
                    return ruckSackOne[i];
                }
            }
        }
    }
}

function sumPriorities(){
    badges.forEach(item => {
        prioritiesTotal += (alphabet.indexOf(item) + 1);
    })
}

console.log(solveDay3());