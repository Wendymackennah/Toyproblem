const consoleInput = prompt("Enter Student Marks");

function calculateGrade(marks){
    if (marks>=79 && marks <=100){
        return 'A';
    }
    else if (marks >=60 &&  marks <=69){
        return 'B';
    } else if (marks>=49 && marks<=59){
        return 'C';
    }else if(marks>=40 && marks<=49){
        return 'D';
    }else if(marks >=40){
        return 'E';
    }else{
        return 'Invalid input';
    }
} 
const grade=calculateGrade(parseInt(consoleInput));
alert(`Your student marks: ${consoleInput}\n Grade: ${grade}`);