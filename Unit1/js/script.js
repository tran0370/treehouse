/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array, built the array of quote objects to store the quotes.
 ***/
var quotes = [
  {
    quote:
      "Absorb what is useful, discard what is useless, and add what is specifically your own.",
    source: "Bruce Lee",
    citation: "Wisdom for the Way",
    year: ""
  },

  {
    quote:
      "Money alone cannot buy pleasure, though it can help. For enjoyment is an art and a skill for which we have little talent or energy.",
    source: "Alan Watts",
    citation: "The Book: On the Taboo Against Knowing Who You Are",
    year: 1966
  },

  {
    quote: "Don’t be sad because it’s over. Smile because it happened.",
    source: " Dr. Suess",
    citation: "",
    year: ""
  },

  {
    quote:
      "Don't worry about people stealing your ideas. If your ideas are any good, you'll have to ram them down people's throats",
    source: "Howard Aiken",
    citation: "",
    year: ""
  },

  {
    quote: "Don't try",
    source: "Charles Bukowski",
    citation: "",
    year: 1990
  }
];
/***
 * `getRandomQuote` function, creates a random number, and uses that random number to return a random quote object from the quotes array.
 ***/
function getRandomQuote(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/***
 * `printQuote` function, displays a new quote each time the user clicks the "Show another quote" button using a printQuote function with 2 if statements
 ***/
function printQuote() {
  let message = getRandomQuote(quotes);
  let pieces =
    "<p class='quote'>" +
    message.quote +
    "</p>" +
    "<p class='source'>" +
    message.source;

  if (message.citation !== "") {
    pieces += "<span class='citation'> " + message.citation + "</span>";
  }

  if (message.year !== "") {
    pieces += "<span class='year'> " + message.year + "</span>";
  }

  pieces += "</p>";

  document.getElementById("quote-box").innerHTML = pieces;
}

printQuote(quotes);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
