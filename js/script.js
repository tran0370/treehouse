/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

quotes = [
  { quote : 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand' ,
    source : 'Martin Fowler',
    citation : '',
    year : '2018'},
  { quote : 'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.' ,
    source : 'Dan Salomon',
    citation : '',
    year : ''},
  { quote : 'If carpenters made buildings the way programmers make programs, the first woodpecker to come along would destroy all of civilization' ,
    source : 'Unknown Author',
    citation : 'Weinberg’s Second Law',
    year : ''},
  { quote : 'People think computers will keep them from making mistakes. They\'re wrong. With computers you make mistakes faster.',
    source : 'Adam Osborne',
    citation : '',
    year : ''},
  { quote : 'Science is not about tools. It is about how we use them, and what we find out when we do.' ,
    source : 'Edsger Dijkstra',
    citation : 'An invitation to Computer Science: Java version',
    year : 2000}
]

// console.log(quotes); // Part of Instructions 5.1

/***
 * `getRandomQuote` function
***/

function getRandomQuote( arrOfObjects ) {
  const num = Math.floor(Math.random() * (arrOfObjects.length)); // usually there would be a '+1' but was removed to match zero-based numbering
  return arrOfObjects[num];
}

// console.log(getRandomQuote( quotes )); // Part of Instructions 7

/***
 * `printQuote` function
***/

function printQuote() {
  const oneQuote = getRandomQuote( quotes ); 
  html = `<p class="quote">${oneQuote.quote}</p>
  <p class="source">${oneQuote.source}`;
 
  if (oneQuote.citation !== ''){
  html += `<span class="citation">${oneQuote.citation}</span>`;
  }
  if (oneQuote.year !== ''){
  html += `<span class="year">${oneQuote.year}</span></p>`; 
  } else {
    html += `</p>`;
  }
console.log(html); // checking the HTML string
document.getElementById('quote-box').innerHTML = html; 
}


printQuote();

// /***
//  * click event listener for the print quote button
//  * DO NOT CHANGE THE CODE BELOW!!
// ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);