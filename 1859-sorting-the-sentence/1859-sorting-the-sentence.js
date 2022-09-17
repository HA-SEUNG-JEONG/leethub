/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let newArray=[];
    let splited = s.split(' ');
    for(i=0;i<splited.length;i++) {
        let indexVal = splited[i][splited[i].length-1]
        newArray[indexVal-1] = splited[i].slice(0,splited[i].length-1);
    }
    return newArray.join(" ");
};