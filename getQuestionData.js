const data = require('./data');


//this function takes question ID and fetches the relevant question data
function getQuestionData(questionID) {

    if (questionID == undefined)
        return 'questionID must be supplied.';

    if (typeof questionID != 'string')
        return 'questionID must be a string.'

        return data[questionID];
}

module.exports = getQuestionData;