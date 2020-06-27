
/*
Random bg colors
#2c3968 - Ford Blue
#1a1f71 - Visa Blue
#004792 - Lowes Blue
#18453B - MSU Green
#004953 - Eagles Midnight Green
#00573F - Jets Gotham Green

Random fonts

Random quotes

*/

function styleOptionalBackground(){
    $("body").css("object-fit", "contain");
    $("body").css("height", "100%");
    $("body").css("background-repeat", "no-repeat");
    $("body").css("background-size", "cover");
    $("body").css("background-position", "center");
    //$("body, html").css("min-height", "100vh");
    $("body").css("-webkit-background-size", "cover");
    $("body").css("-moz-background-size", "cover");
    $("body").css("-o-background-size", "cover");
}

/* Quotes Array to choose from */
var garyVeeQuotesArray = [
    "You have to understand your own personal DNA. Don’t do things because I do them or Steve Jobs or Mark Cuban tried it. You need to know your personal brand and stay true to it.",
    "Skills are cheap. Passion is priceless.",
    "No matter what you do, your job is to tell your story.",
    "Look yourself in the mirror and ask yoursel, what do I want to do everyday for the rest of my life…do that.",
    "There’s no reason in 2020, to do shit you hate. NONE.",
    "The truth is that finding happiness in what you do every day is so imperative.",
    "You didn’t grow up driving…you figured it out.",
    "There is never a bad time to start a business – unless you want to start a mediocre one.",
    "Time – the one asset none of us are ever gonna get more of.",
    "All your ideas may be solid or even good .. But you have to Actually EXECUTE on them for them to matter.",
    "Love your family, work super hard, live your passion.", 
    "I’m just always looking forwards. I spend very little time, looking backwards", 
    "Effort is grossly underrated.", 
    "You can market your ass off, but if your product sucks, you’re dead.", 
    "Legacy is greater than currency.",
    "I hate how many people think 'glass half-empty' when their glass is really four-fifths full. I’m grateful when I have one drop in the glass because I know exactly what to do with it.",
    "If you live for the weekends and vacation, your shit is broken." ,
    "You need to spend all of your time and energy on creating something that actually brings value to the people you’re asking for money!",
    "Stop whining, start hustling.",
    "Know the philosophy, know the detail, and ignore everything in the middle.",
    "We are in control of the one asset that we all give the most f#%ks about, and that is time.",
    "We only get to play this game one time…one life.",
    "Whether you’re 9 or 90, stop trying to fix the things you’re bad at, and focus on the things you’re good at.",
    "When it all comes down to it, nothing trumps execution.",
    "Your legacy is being written by yourself. Make the right decisions.",
    "A penguin cannot become a giraffe, so just be the best penguin you can be.",
    "It’s easy to dream about it … Much harder to execute it ….Work!",
    "Relationships are leverage. If you give value to someone else first, you have leverage." 
    ]
console.log("Array length: " + garyVeeQuotesArray.length)

/* bg image
    camp - 1
    intersection - 2
    window - 3
*/
var randomImageNumber = Math.floor((Math.random() * 3 + 1));
switch(randomImageNumber) {
    case 1:
        $("body").css("background", "url('img/camp.jpg')");
        styleOptionalBackground();
        break
    case 2:
        $("body").css("background", "url('img/intersection.jpg')");
        styleOptionalBackground();
        break
    case 3:
        $("body").css("background", "url('img/window.jpg')");
        styleOptionalBackground();
        break
}
    
/* Grab a random number quote out of the array */
var randomQuote = Math.floor((Math.random() * garyVeeQuotesArray.length));
console.log(randomQuote);
console.log(garyVeeQuotesArray[randomQuote]) 

/* Grab random font and apply it 
amatic - 1
notable - 2
condensed - 3
piedra - 4
shadows - 5
*/
var randomFontNumber = Math.floor((Math.random() * 5 + 1));
switch(randomFontNumber) {
    case 1:
        console.log("font 1 applied")
        $(".quote").toggleClass("amatic");
        break
    case 2:
        console.log("font 2 applied")
        $(".quote").toggleClass("notable");
        break
    case 3:
        console.log("font 3 applied")
        $(".quote").toggleClass("condensed");
        break
    case 4:
        console.log("font 4 applied")
        $(".quote").toggleClass("piedra");
        break
    case 5:
        console.log("font 5 applied")
        $(".quote").toggleClass("shadows");
        break
}

$(".person-name").text("Gary Vee");
$(".quote-rand").text(garyVeeQuotesArray[randomQuote])