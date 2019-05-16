// Loads a series of code mirrors when the page is loaded 
// Take a class name and gets the code from teh div and then the mode from an attribute within the div
function loadAllMirrors(inClassName) {
    classArray = document.getElementsByClassName(inClassName);
    for(var i = 0; i < classArray.length; i++){
        loadStandAloneCodeMirror(classArray[i].textContent
                                ,classArray[i]
                                ,classArray[i].getAttribute("class").split(" ")[1]);
    }

    // Loop through and remove the text within the divs with class code by removing the first child of the parent
    for(var i = 0; i < classArray.length; i++) {
        classArray[i].removeChild(classArray[i].children[0]); 
    }
    
}

// Array of coce mirrors to allow multiple on the same page
var mirrors = [];

// Creates a standalone code mirror for displaying css
// Takes two parameters one for the text to display and one for the id of the target inwhich to 
// instatiate the mirror
function loadStandAloneCodeMirror(text, target, mode){
    console.log(mode);
    mirrors.push(CodeMirror(target,{
        lineNumbers: true,
        theme: "cm-s-base16-light",
        lineWrapping: true,
        readOnly: true,
        mode: mode
    }));
    mirrors[mirrors.length-1].setValue(text); 

};