const data = require('./data');


const getQuestionData = require('./getQuestionData');

test('getQuestionData response when no argument passed', () => {
    expect(getQuestionData()).toBe('questionID must be supplied.');
})

test('getQuestionData response when number argument passed', () => {
    expect(getQuestionData()).toBe('questionID must be a string.');
})

test('getQuestionData response when null argument passed', () => {
    expect(getQuestionData()).toBe('questionID must be a string.');
})


