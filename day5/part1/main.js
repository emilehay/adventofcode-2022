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

    return finalStacks
}

function prepBoxes(boxes) {
    let tempStacks = new Array(9);
    boxes.forEach((row, index) => {
        let counter = 0;
        for(let i = 1; i < row.length; i = i + 4){
            if(!tempStacks[counter]){
                tempStacks[counter] = new Array();
            }
            if(row[i] !== " "){
                tempStacks[counter].push(row[i])
            }
            counter++
        }
    })

    return tempStacks;
}
function doInstructions(finalStacks, instructions) {
    
    return finalStacks
}

console.log(solveDay5());