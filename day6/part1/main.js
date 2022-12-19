let input

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                input = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}

function solveDay6(){
    let inputArray;
    readTextFile("./data.txt");
    //Make array from the string
    inputArray = input.split('')

    for(let i = 0; i < inputArray.length; i++){
        subArray = inputArray.slice(i, i + 4);
        if(!duplicatesFound(subArray)){
            return i + 4;
        }
    }
}

function duplicatesFound(arr){
    let arrSet = [...new Set(arr)];
    return (arrSet.length !== arr.length) ? true : false;
}

console.log(solveDay6());