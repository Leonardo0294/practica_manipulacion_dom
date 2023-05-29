const colorButton = document.getElementById("color-button");
const textParagraph = document.getElementById("text-paragraph");

let isPurple = true;

colorButton.addEventListener("click", () => {
  if (isPurple) {
    textParagraph.classList.remove("purple-text");
    textParagraph.classList.add("orange-text");
    isPurple = false;
  } else {
    textParagraph.classList.remove("orange-text");
    textParagraph.classList.add("purple-text");
    isPurple = true;
  }
});