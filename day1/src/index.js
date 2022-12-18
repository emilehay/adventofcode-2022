let text;

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
                text = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}

function arrayFromStrings(arrayText){

    let splitString = arrayText.split('\n\n');

    for(let i = 0; i < splitString.length; i++){
        splitString[i] = splitString[i].split('\n');
        splitString[i] = splitString[i].reduce((a, b) => Number.parseInt(a) + Number.parseInt(b))
    }

    return splitString.sort().reverse();
}

readTextFile('./data.txt')

let sumThree;

let sortedArray = arrayFromStrings(text);
let subArray = sortedArray.slice(0, 3);

sum = subArray.reduce((pv, cv) => Number.parseInt(pv) + Number.parseInt(cv), 0);

console.log(sum);