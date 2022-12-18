let input, totalScore = 0;

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

    //Make arrays from string
    inputArrays = input.split('\n')

    //Let's play!
    inputArrays.forEach(round => {
        solveRound(round[0], round[round.length - 1])
    });
    
    return totalScore
}

function solveRound(opponentShape, myShape){

    let roundScore = totalScore;

    //Calculate result score
    if(winOutcomes.includes(`${opponentShape}${myShape}`)){
        totalScore += outcomeScore.WIN
    } else if (drawOutcomes.includes(`${opponentShape}${myShape}`)){
        totalScore += outcomeScore.DRAW
    } else {
        totalScore += outcomeScore.LOSS
    }

    //Calculate shape score
    totalScore += shapeScore[myShape]
    roundScore = totalScore - roundScore;
}

console.log(solveDay2());