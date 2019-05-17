

/* Loop through a list of flex items to alternate the colour of each one through a selected pallete to make sure each flex is visible
 * Takes a hex values as the colours 
 * This function will also adjust the position of the flex items eg if there are 10 items the last one will be placed in the middle column*/
function flexColorAlternate(colourOne, colourTwo, fade){
    // Get the list of flex items
    flexItems = document.getElementsByClassName("flex-item");

    // Convert the colours to rgb
    colourOne = hexToRgb(colourOne);
    colourTwo = hexToRgb(colourTwo);

    // Loop through the array of flexitems to apply the background colour with the defined fade
    for(var i = 0; i < flexItems.length; i++){
        if((i % 2) == 0){
            flexItems[i].style.backgroundColor = ("rgba("+colourOne.r + "," + colourOne.g + "," + colourOne.b + "," + fade + ")");
        }
        else{
            flexItems[i].style.backgroundColor = ("rgba("+colourTwo.r + ","+ colourTwo.g + ","+ colourTwo.b +"," + fade + ")");
        }
    }
}


// Converts a hex value to a rgb value and returns an object of the result
// Source - https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
