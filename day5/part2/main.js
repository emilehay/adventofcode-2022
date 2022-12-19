let input

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

function solveDay5(){
    let inputArrays, boxes = [], instructions = [];
    readTextFile("./data.txt");

    //Make arrays from strings
    inputArrays = input.split('\n')

    inputArrays.forEach(row => {
        switch(row.charAt(0)){
            case '[':
                boxes.push(row)
                break;
            case 'm':
                instructions.push(row)
                break;
        }
    })

    let finalStacks = prepBoxes(boxes);
    doInstructions(finalStacks, instructions);
    return getTopBoxes(finalStacks);
}

function prepBoxes(boxes) {
    let tempStacks = new Array(9);
    boxes.forEach((row) => {
        let counter = 0;
        for(let i = 1; i < row.length; i = i + 4){
            if(!tempStacks[counter]){
                tempStacks[counter] = new Array();
            }
            if(row[i] !== " "){
                tempStacks[counter].unshift(row[i])
            }
            counter++
        }
    })

    return tempStacks;
}
function doInstructions(finalStacks, instructions) {
    instructions.forEach(instruction => {
        instruction = instruction.split(" ");
        let amount = instruction[1];
        let sourceIndex = instruction[3] - 1;
        let destIndex = instruction[5] - 1;

        let crateMoverPayload = [];
        for(let i = 0; i < amount; i++) {
            crateMoverPayload.unshift(finalStacks[sourceIndex].pop());
        }
        finalStacks[destIndex] = [...finalStacks[destIndex], ...crateMoverPayload];
    });

    return finalStacks;
}

function getTopBoxes(finalStacks){
    let topBoxes = '';

    for(let i = 0; i < finalStacks.length; i++){
        topBoxes += finalStacks[i].slice(-1);
    }

    return topBoxes;
}

console.log(solveDay5());