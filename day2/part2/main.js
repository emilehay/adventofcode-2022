let input, totalScore = 0;

let strategizedOutcomes = { "X": "LOSS", "Y": "DRAW", "Z": "WIN" }
let shapeScore = { "X": 1, "Y": 2, "Z": 3 }
let outcomeScore = { "DRAW": 3, "LOSS": 0, "WIN": 6 }

let winOutcomes = ["AY", "BZ", "CX"];
let drawOutcomes = ["AX", "BY", "CZ"];
let lossOutcomes = ["AZ", "BX", "CY"];

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

function solveDay2(){
    let inputArrays;
    readTextFile("./data.txt");

    //Make arrays from strings
    inputArrays = input.split('\n')

    //Let's play!
    inputArrays.forEach(round => {
        solveRound(round[0], round[round.length - 1])
    });
    
    return totalScore
}

function solveRound(opponentShape, desiredOutcomeKey){
    let roundScore = totalScore;
    let outcomeIndex;
    let desiredOutcome = strategizedOutcomes[desiredOutcomeKey];

    //Get the necessary configuration to reach the desired outcome
    if(desiredOutcome === "WIN"){
        outcomeIndex = winOutcomes.filter(e => e.includes(opponentShape))
    } else if (desiredOutcome === "DRAW"){
        outcomeIndex = drawOutcomes.filter(e => e.includes(opponentShape))
    } else {
        outcomeIndex = lossOutcomes.filter(e => e.includes(opponentShape))
    }

    //Calculate the outcome score based and get the shape I need to play
    totalScore += outcomeScore[desiredOutcome]
    myShape = outcomeIndex[0][outcomeIndex[0].length - 1]

    //Calculate shape score
    totalScore += shapeScore[myShape]
    roundScore = totalScore - roundScore;
}

console.log(solveDay2());