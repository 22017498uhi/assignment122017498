//fetch list of answers as prerequisite
const getQuestionData = require('./getQuestionData');
const resp = getQuestionData('balances');

const attemptQuestion = require('./attemptQuestion');


const answerDataArr = resp.questions.fullquestion.answer;


//Write tests related to function argument
describe('attemptQuestion : behaviour based on various input arguments', () => {

    test('when no argument is passed,', () => {
        expect(attemptQuestion()).toBe('selected Answer must be supplied.');
    })

    test('when non number "abcd" is passed as argument, returns error response "valid number must be supplied."', () => {
        expect(attemptQuestion()).toBe('valid number must be supplied.');
    })

    test('when valid number argument is passed, for example 1', () => {
        expect(attemptQuestion(1)).toBeDefined();
    })
})

//Write tests related to Response of function
describe('attemptQuestion : response data', () => {

    test('when correct answer is selected, return "Your answer is correct."', () => {
        expect(attemptQuestion(1)).toBe('Your answer is correct.');
    })

    test('when incorrect answer is selected, return "Your answer is incorrect."', () => {
        expect(attemptQuestion(4)).toBe('Your answer is incorrect.');
    })

})


