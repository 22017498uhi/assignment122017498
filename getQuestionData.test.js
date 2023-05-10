const data = require('./data');


const getQuestionData = require('./getQuestionData');

test('getQuestionData response when valid string argument passed', () => {
    expect(getQuestionData('balances')).toHaveProperty('balances'); //valid response will have same property as function input
})

test('getQuestionData response when data not found for string argument passed', () => {
    expect(getQuestionData('abcd')).toBeFalsy(); //most likely empty object will be returned
})

test('getQuestionData response when no argument passed', () => {
    expect(getQuestionData()).toBe('questionID must be supplied.');
})

test('getQuestionData response when number argument passed', () => {
    expect(getQuestionData(123)).toBe('questionID must be a string.');
})

test('getQuestionData response when null argument passed', () => {
    expect(getQuestionData(null)).toBe('questionID must be a string.');
})


