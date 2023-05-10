const data = require('./data');


const getQuestionData = require('./getQuestionData');

describe('GetQuestionData behaviour based on various input arguments', () => {

    test('when valid string argument passed', () => {
        expect(getQuestionData('balances')).toHaveProperty('questions'); //valid response will have questions property atleast
    })

    test('when data not found for string argument passed', () => {
        expect(getQuestionData('abcd')).toBeFalsy(); //most likely empty object or undefined will be returned
    })

    test('when no argument passed', () => {
        expect(getQuestionData()).toBe('questionID must be supplied.');
    })

    test('when number argument passed', () => {
        expect(getQuestionData(123)).toBe('questionID must be a string.');
    })

    test('when null argument passed', () => {
        expect(getQuestionData(null)).toBe('questionID must be a string.');
    })

})