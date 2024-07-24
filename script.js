// Gets the first h2 element from all h2 elements in the html document
function useMe1() {
  console.log(document.querySelector("h2"));
}

// Gets a list of all h2 elements
function useMe2() {
  console.log(document.querySelectorAll("h2"));
}

// Accessing text
function accessTextById() {
  const mainGreeting = document.getElementById("main-greeting-access");

  // Print to console
  console.log(mainGreeting.innerText); // "Hello World!"
}

// Answer by egiray: https://stackoverflow.com/questions/9003270/uncaught-typeerror-cannot-read-property-innerhtml-of-null
// 'You are calling this script before DOM is ready. If you write this code into jquery's $(function() method it will work.'
// AccessTextById();

// Modifying text
function modifyTextById() {
  const mainGreeting = document.getElementById("main-greeting-modify");

  // Modify text
  mainGreeting.innerText = "It's changed................................!";
}

// Access and modify text
function useTextContentById() {
  const mainGreeting = document.getElementById("main-greeting-textcontent");

  // Modify text
  mainGreeting.textContent =
    "It's changed_______________________________________________!";
}

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

// Modify HTML
function modifyHTMLById() {
  const mainGreeting = document.getElementById("main-greeting-modifyme");

  // Note this has a security concern, mostly will be using ".innerText" instead of ".innerHTML"
  mainGreeting.innerHTML =
    "<article>Just changed~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!</article>";
}

// Modify CSS, change h1 color to red and background color to green
function modifyCSSById() {
  const mainHeading = document.querySelector("h1");

  mainHeading.style.color = "red";
  mainHeading.style.backgroundColor = "green";
}
