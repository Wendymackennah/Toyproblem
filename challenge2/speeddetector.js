const  consoleInput =prompt('Enter Speed');

function speedDetector(speed){
const speedLimit =70;
const  pointsPerDemerit=5;
const pointsThreshold =12;
if (speed < speedLimit){
    return 'OK';
}
else{
    const demeritPoints = Math.floor((speed-speedlimit )/pointsPerDemerit);
    if (demeritPoints > pointsThreshold) {
        return "License suspended";
    }else{
        return `Points: ${demeritPoints}`;
    }
}
}
console.log(speedDetector(90));
alert("your demerit Points : ${demeritPoints}");