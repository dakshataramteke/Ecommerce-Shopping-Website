// Special  Countdown

let dayItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
  let futureDate = new Date("July 20, 2024 00:00:00"); // add time to the date
  let currentDate = new Date();
  let myDate = Math.abs(futureDate - currentDate); // use Math.abs() to get the absolute value

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let min = Math.floor(myDate / 1000 / 60) % 60;
  let sec = Math.floor(myDate / 1000) % 60;

  dayItem.innerText = days;
  hoursItem.innerText = hours;
  minItem.innerText = min;
  secItem.innerText = sec;
}

countDown();
setInterval(countDown, 1000);


// Get the scroll to top button
const scrollToTopButton = document.getElementById('scrollUp');

// Add event listener to the button
scrollToTopButton.addEventListener('click', () => {
  // Scroll to the top of the page
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) { // adjust the value to your liking
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});