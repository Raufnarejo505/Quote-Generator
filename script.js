// get quotes from api
let apiQuotes = [];
async function getQuotes(){
    const apiUrl='https://type.fit/api/quotes';
    try{
        const responce = await fetch(apiUrl);
        apiQuotes = await responce.json(); 
        console.log(apiQuotes[120]);
    }catch(error){
        // catch error here
    }
}   


getQuotes();