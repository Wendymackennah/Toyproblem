const  consoleInput =prompt('Enter Speed');//To  get speed in km/hr from the drivers
//Function to calculate points based on the driver's speed limit
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
//alert to give an output to the driver
alert("your demerit Points : ${demeritPoints}");