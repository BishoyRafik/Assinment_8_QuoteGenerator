// Defining some quote objects and each object has 2 properties theQuote & author to be called later in paragraphs
var quote1 = {
    theQuote : '“Be yourself; everyone else is already taken.”',
    author :'― Oscar Wilde',
}
var quote2 = {
    theQuote : '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
    author :'― Albert Einstein',
}
var quote3 = {
    theQuote : '“A room without books is like a body without a soul.”',
    author :'― Marcus Tullius Cicero',
}
var quote4 = {
    theQuote : '“You only live once, but if you do it right, once is enough.”',
    author :'― Mae West',
}
var quote5 = {
    theQuote : '“Twenty years from now you will be more disappointed by the things that you did not do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”',
    author :'― H. Jackson Brown Jr., P.S. I Love You',
}
var quote6 = {
    theQuote : '“Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.”',
    author :'― Bernard M. Baruch',
}
var quote7 = {
    theQuote : '“Be the change that you wish to see in the world.”',
    author :'― Mahatma Gandhi',
}
// Array of Objects to call objects randomly by index later
var quotes = [quote1, quote2, quote3, quote4, quote5, quote6, quote7];
var current; // variable to store current random number in order to compare with the generated random number later

// main function called with action on click on button operates the program
function generateQuote(){
    // console.log(quotes); //displays quotes array in console
    displayQuote();    // calls displayQuote function
}

// function used to generate random number and get a quote according to this random number
function displayQuote(){
    var container = ''      //Empty container to be used in printing html code using JS 
    var random  = Math.floor(Math.random()*quotes.length);      //variable generates random number from 0 to quotes array length which is dynamic if new quotes were added in the future
    if(random == current){      //if the generated number is equal to the last generated one 
        displayQuote();         //then it with recall itself recrusively to generate other random number
    } else {        //when they are not equal it will add two paragraph tags to the container

        //first P calls the quote object with index = random generated number to get the value of theQuote from it
        //second P calls the quote object with same index = random generated number to get the value of author from it
        container +=
        `
        <p class="quote my-3 bg-success-subtle rounded-2">${quotes[random].theQuote}</p> 
        <p class="author my-3 bg-success-subtle rounded-2">${quotes[random].author}</p>
        `;

        document.getElementById("quotePlace").innerHTML=container; //this line calls a tag with id quotePlace inside the html file to put the block of code stored in container inside it
        current = random; //changing current to the new random generated
    }

    // console.log('current is ',current); //displays current in console
    console.log('random is ',random); //displays random in console
}
