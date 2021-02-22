/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */

function greet(time) {
  let time1 = time.split(`:`);
  let time2 = time1[0].concat(time1[1])
  let aggregate = parseInt(time2, 10)


  if (aggregate < 1200) {
    return `Good Morning`;
  }
  else if (aggregate > 1700) {
    return `Good Evening`;
  }
  else {
    return `Good Afternoon`
  }
}

/* Write your implementation of displayMessage() */

function displayMessage() {
  
}