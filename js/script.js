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
let quotes = [
  { 
      quote:'Don’t Let Yesterday Take Up Too Much Of Today.',
      source: 'Will Rogers',
    
  },
  { 
      quote:'You Are Never Too Old To Set Another Goal Or To Dream A New Dream.',
      source: 'C.S Lewis',
      citation: 'Live Your Dreams',
      year: 1992
  },
  { 
      quote:'Reading Is To The Mind, As Exercise Is To The Body.',
      source: 'Brian Tracy',
      genre: 'Self-Help'
     
  },
  { 
      quote:'You Don’t Have To Be Great To Start, But You Have To Start To Be Great.',
      source: 'Zig Ziglar',
     
  },
  { 
      quote:'Being happy never goes out of style.',
      source: 'Lilly Pulitzer',
     
     
  },
  { 
      quote:'When you learn, teach,',
      source: 'Maya Angelou',
      citation: 'I know why the caged bird sings',
      year: 1969
  }
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote(array){
// generate random number between 0 and the array length
let randomNumber = Math.floor(Math.random() * array.length);

// return the quote using the random number as an index
return array[randomNumber];

}


/***
 * `printQuote` function
***/

function printQuote(){
// Store the random quote
  let storeRandomQuote = getRandomQuote(quotes);

// Quote body
  let quoteString = `
  <p class="quote"> ${storeRandomQuote.quote} </p>
  <p class="source"> ${storeRandomQuote.source}
  `;

// If a citation or year exists, add it to the Quote body w/ concatenation
  if(storeRandomQuote.citation){
     quoteString += `<span class="citation">${storeRandomQuote.citation}</span>`;
  }else if (storeRandomQuote.year) {
     quoteString += `<span class="year">${storeRandomQuote.citation}</span>`;
  }else if (storeRandomQuote.genre) {
    quoteString += `<span class="genre">${storeRandomQuote.genre}</span>`;
 }
  
  quoteString += `</p>`;
  document.body.style.backgroundColor = randoColor();
  // return the string / quote body and add it to the inner HTML of the container
  return document.getElementById('quote-box').innerHTML = quoteString ;
}

function randoColor() {
  //random # between 0 and 256
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);

   // concat into one statement for rgb value
   let getRGB =  `rgb(${r}, ${g}, ${b})`;
   return getRGB

}
// Dishanta Kpatrick

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
setInterval(printQuote, 10000);

// Assistance on setTimeout / setInterval methods from https://www.w3schools.com/jsref/met_win_setinterval.asp

