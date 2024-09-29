

function grade(score) {
    if (score >= 90) {
        return 'A+ Passed';
    } else if (score >= 80) {
        return 'A Passed';
    } else if (score >= 70) {
        return 'B+ Passed';
    } else if (score >= 60) {
        return 'B Passed';
    }
    else if (score >= 50) {
        return 'C+ Passed';
    }
    else if (score >= 40) {
        return 'C Passed';
    }
    else if (score >= 30) {
        return 'D+ Passed';
    }
    else if (score >= 20) {
        return 'D Failed';
    }
    else if (score >= 0) {
        return 'E+ Failed';
    }

}

function getscore() {

    let score = document.getElementById('result').value;
 


    let gradeResult = grade(score);


    document.getElementById('Output').innerText = "The grade is: " + gradeResult;
}

