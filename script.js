const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
// const twitter = document.getElementById('twitter');
const twitterBtn = document.getElementById('twitter');
const Quote = document.getElementById('newQuote');
const loader =  document.getElementById('loader');
// get quotes from api
let apiQuotes = [];

// loading function
function loading(){
    loader.hidden  =false;
    quoteContainer.hidden = true;
}
// compconste function
function complete (){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// show new quote
function newQuote(){
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    quoteText.textContent = quote.text;

//  check if author field is blank then place 'unknown'
    if(!quote.author){
        quoteAuthor.textContent = 'Unknown'
    }else{
        quoteAuthor.textContent = quote.author; }
        complete();
}
async function getQuotes(){
    loading();
    const apiUrl='https://type.fit/api/quotes';
    try{
        const responce = await fetch(apiUrl);
        apiQuotes = await responce.json(); 
        // console.log(apiQuotes[120]);
        newQuote();
       
    }catch(error){
        // catch error here
    }
    complete();

}   


// tweet quote

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${quoteAuthor.innerText}`;
    window.open(twitterUrl, '_blank');
  }

// Event listenners 
 
Quote.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);

getQuotes();



