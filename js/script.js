/*
Swedish color pallete at Flatui
https://flatuicolors.com/palette/se
*/
const palette = [
    "#ef5777", "#575fcf", "#4bcffa", "#34e7e4", "#0be881",
    "#f53b57", "#3c40c6", "#0fbcf9", "#00d8d6", "#05c46b",
    "#ffc048", "#ffdd59", "#ff5e57", "#d2dae2", "#485460",
    "#ffa801", "#ffd32a", "#ff3f34", "#808e9b", "#1e272e"
]

/*
The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.

See https://github.com/coolaj86/knuth-shuffle

You can see a great visualization here (and the original post linked to this)
*/

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
/*
LIGHTENDARKENCOLOR FUNCTION FOUND ON WEB
https://css-tricks.com/snippets/javascript/lighten-darken-color/
*/
function LightenDarkenColor(col, amt) {

    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col, 16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);

}



let headers = document.getElementsByClassName("section-header");
let nav_links = document.getElementsByClassName("nav-link");
let text_boxes = document.getElementsByClassName("text-box");
//generate random array between 0 - 19
let randomNumberArray = [...Array(20).keys()];
randomNumberArray = shuffle(randomNumberArray);
for (let i = 0; i < headers.length; i++) {
    headers[i].style = `background-color: ${palette[randomNumberArray[i]]}`;
    nav_links[i].style = `background-color: ${palette[randomNumberArray[i]]}`;
    let lighter_text_box = LightenDarkenColor(palette[randomNumberArray[i]],80);
    text_boxes[i].style = `background-color: ${lighter_text_box};`;
}