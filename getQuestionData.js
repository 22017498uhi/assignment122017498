const data = require('./data');


//this function takes question ID and fetches the relevant question data
function getQuestionData(questionID) {

    var respData = {}

    if (questionID == undefined)
        return 'questionID must be supplied.';

    if (typeof questionID != 'string')
        return 'questionID must be a string.'

    respData = data[questionID];

    return respData;
}

module.exports = getQuestionData;