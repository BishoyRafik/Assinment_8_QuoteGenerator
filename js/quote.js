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
var quotes = [quote1, quote2, quote3, quote4, quote5];
var current;

function generateQuote(){
    // clearData();
    console.log(quotes);
    displayQuote();
    console.log('random is ',random);
    console.log('current is ',current);
    
}

function displayQuote(){
    var container = ''
    var random  = Math.floor(Math.random()*(quotes.length + 1));
    if(random == current){
        generateQuote();
        current = random;
    } else {
        container +=
        `
        <p class="quote my-3 bg-success-subtle rounded-2">${quotes[random].theQuote}</p>
        <p class="author my-3 bg-success-subtle rounded-2">${quotes[random].author}</p>
        `
        document.getElementById("quotePlace").innerHTML=container;
        current = random;
    }
}

// Doesn't need a clear function as it overwrites each time
// function clearData(){
//     document.getElementById('quotePlace').innerHTML = `
//     <p class="quote my-3"></p>
//     <p class="author my-3"></p>
//     `
// }