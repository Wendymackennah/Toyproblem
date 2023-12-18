const consoleInput = prompt("Enter Student Marks");//declares variable that prompts user to input student marks.
//function has if and else statements to help define the categories in which one`s marks belong.
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
//To output the grade scored
alert(`Your student marks: ${consoleInput}\n Grade: ${grade}`);
//After Calculation, and click of a button on the alert dialog box ,one is alerted on the grades they scored.
