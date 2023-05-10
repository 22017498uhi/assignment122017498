const data = require('./data');


//this function takes question ID and fetches the relevant question data
function getQuestionData(questionID){
    return data[questionID];
}

module.exports = getQuestionData;