var index = 0;
var quote = [
    { quotesOutput: "Resentment is like drinking poison and waiting for your enemies to die.", author: '--Nelson Mandela' },
    { quotesOutput: "It's not what happens to you, but how you react to it that matters.", author: '--Epictetus' },
    { quotesOutput: "You miss 100% of the shots you don't take.", author: '--Wayne Gretzy' },
    { quotesOutput: "Do not take life too seriously. You will not get out alive.", author: '--Elbert Hubbard' },
    { quotesOutput: "The best revenge is massive success.", author: '--Frank Sinatra' }
]
function output() {
    if (index < quote.length) {
        document.getElementById('quotesOutput').innerHTML = quote[index].quotesOutput;
        document.getElementById('author').innerHTML = quote[index].author;
        index++;
    } else {
        index = 0;
    }
}