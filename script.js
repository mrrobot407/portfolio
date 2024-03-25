// Access the left-side element
const leftSideElement = document.getElementById("left-side");

// Handles mouse and touch movement to adjust the width of the left-side element
const handleMovement = (event) => {
  const clientX = event.touches ? event.touches[0].clientX : event.clientX;
  const newWidthPercentage = (clientX / window.innerWidth) * 100;
  leftSideElement.style.width = `${newWidthPercentage}%`;
};

// Attach movement handlers for both mouse and touch events
document.addEventListener("mousemove", handleMovement);
document.addEventListener("touchmove", (event) => handleMovement(event));

// Function to animate text change on mousemove over the backend element
const animateTextChange = (event) => {
  const targetElement = event.target;
  let iterations = 0;
  const interval = setInterval(() => {
    targetElement.innerText = targetElement.innerText
      .split("")
      .map((char, index) =>
        index < iterations ? targetElement.dataset.value[index] : randomSign()
      )
      .join("");
    if (iterations >= targetElement.dataset.value.length)
      clearInterval(interval);
    iterations++;
  }, 30);
};

// Generate a random sign from the alphabet
const randomSign = () =>
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];

// Enhance text by wrapping each letter in a span with class 'letter'
const enhanceTextWithSpans = (id) => {
  const element = document.getElementById(id);
  const letters = element.innerText.split("");
  element.innerText = "";
  letters.forEach((letter) => {
    const span = document.createElement("span");
    span.className = "letter";
    span.innerText = letter;
    element.appendChild(span);
  });
};

// Initialize text enhancement and attach text animation handler
document
  .getElementById("backend")
  .addEventListener("mousemove", animateTextChange);
enhanceTextWithSpans("frontend");


function downloadCV() {
  // Replace 'cv.pdf' with the actual file name and extension of your CV
  var cvUrl = './images/cv.pdf';
  
  // Create a temporary link element
  var link = document.createElement('a');
  link.href = cvUrl;
  
  // Set the download attribute to the file name
  link.download = 'cv.pdf';
  
  // Append the link to the body
  document.body.appendChild(link);
  
  // Programmatically click the link to trigger the download
  link.click();
  
  // Remove the link from the body after the download starts
  document.body.removeChild(link);
}

// paralex
