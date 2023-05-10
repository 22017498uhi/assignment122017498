const data = require('./data');


const getQuestionData = require('./getQuestionData');

//Write tests related to function argument
describe('GetQuestionData : behaviour based on various input arguments', () => {

    test('when valid string "balances" argument passed, returns valid data', () => {
        expect(getQuestionData('balances')).toHaveProperty('questions'); //valid response will have questions property atleast
    })

    test('when invalid string "abcd" passed for input, returns empty object', () => {
        expect(getQuestionData('abcd')).toBeFalsy(); //most likely empty object or undefined will be returned
    })

    test('when no argument passed, returns error "questionID must be supplied."', () => {
        expect(getQuestionData()).toBe('questionID must be supplied.');
    })

    test('when 123 (number) argument passed, returns error response "questionID must be a string."', () => {
        expect(getQuestionData(123)).toBe('questionID must be a string.');
    })

    test('when null argument passed, returns error "questionID must be supplied."', () => {
        expect(getQuestionData(null)).toBe('questionID must be supplied.');
    })

})

//Write tests related to response
describe('GetQuestionData : response data', () => {

    test('when response contains questions property as expected', () => {
        expect(getQuestionData('balances')).toHaveProperty('questions');
    })

    test('when response contains hints property as expected', () => {
        expect(getQuestionData('balances')).toHaveProperty('hint');
    })


    test('when response contains answer property', () => {
        const resp = getQuestionData('balances');

        expect(resp).toHaveProperty('questions.fullquestion.answer');


    })

    //if answer has 0 or 1 choices then it doesnt make sense. user must select out of 2 options at bare minimum
    test('when response contains answer property which should be an array with atleast 2 elements', () => {
        const resp = getQuestionData('balances');

        expect(resp).toHaveProperty('questions.fullquestion.answer');

        const answerData = resp.questions.fullquestion.answer;

        expect(answerData).not.toHaveLength(0);
        expect(answerData).not.toHaveLength(1);


    })

})