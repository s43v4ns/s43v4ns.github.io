// Loads a series of code mirrors when the page is loaded 
// Takes an array of text and an arry of ids 
function loadAllMirrors(textArray, idArray, modeArray){
    for(var i = 0; i < textArray.length; i++){
        loadStandAloneCodeMirror(textArray[i],idArray[i],modeArray[i]);
    }

    // Make sure the height is set to the 100%
    $(".CodeMirror").css("height", "100%");
   
}

// Array of coce mirrors to allow multiple on the same page
var mirrors = [];

// Creates a standalone code mirror for displaying css
// Takes two parameters one for the text to display and one for the id of the target inwhich to 
// instatiate the mirror
function loadStandAloneCodeMirror(text, target, mode){
    mirrors.push(CodeMirror(document.getElementById(target),{
        lineNumbers: true,
        readOnly: true,
        mode: mode
    }));
    mirrors[mirrors.length-1].setValue(text); 

};