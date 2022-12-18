let input, overlappedPairs = 0;

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

function solveDay4(){
    let inputArrays;
    readTextFile("./data.txt");

    //Make arrays from strings
    inputArrays = input.split('\n')

    //Let's get our duplicates
    inputArrays.forEach(sections => {
        sections = sections.split(",");
        checkOverlap(sections)
    });

    return overlappedPairs
}

function checkOverlap(sections) {

    let groupOneSections = sections[0].split("-");
    let groupTwoSections = sections[1].split("-");

    for(let i = 0; i < groupOneSections.length; i++){
        groupOneSections[i] = Number.parseInt(groupOneSections[i])
        groupTwoSections[i] = Number.parseInt(groupTwoSections[i])
    }

    if(
        ((groupOneSections[0] <= groupTwoSections[0]) && (groupTwoSections[1] <= groupOneSections[1])) ||
        ((groupTwoSections[0] <= groupOneSections[0]) && (groupOneSections[1] <= groupTwoSections[1]))){
            overlappedPairs++;
    }
}

console.log(solveDay4());