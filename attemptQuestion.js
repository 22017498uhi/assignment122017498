
//we are assuming that answerdata array is shown as buttons, each button corresponds to index of an array
//below function accepts index of a perticular array element
function attemptQuestion(selectedAnswerIndex) {

    //this test is done for balances, but it can be done for any other question
    const getQuestionData = require('./getQuestionData');
    const resp = getQuestionData('balances');

    const answerDataArr = resp.questions.fullquestion.answer;


    if (!selectedAnswerIndex) {
        return "selected Answer must be supplied."
    }

    if (typeof selectedAnswerIndex !== 'number') {
        return "valid number must be supplied."
    }

    //now check if selected index is correct answer from the array

    if (answerDataArr[selectedAnswerIndex].correct === true){
        return "Your answer is correct."
    }else{
        return "Your answer is incorrect."
    }

}

module.exports = attemptQuestion;