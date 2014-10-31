/**
 * Created by jose on 31/10/14.
 */
var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];

function censor(inStr){
    for (idx in censoredWords){
        inStr =  inStr.replace(censoredWords[idx], "****");
    }

    for(idx in customCensoredWords){
        inStr.replace(customCensoredWords[ids],"****");
    }

    return inStr;
}

function addCensoredWord(word){
    customCensoredWords.push(word);
}

function getCensoredWords(){
    return customCensoredWords.concat(customCensoredWords);
}

// Like public
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;