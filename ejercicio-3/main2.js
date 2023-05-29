window.onload = function() {
    const calculateButton = document.getElementById("calculateButton");
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operationSelect = document.getElementById("operation");
    const resultParagraph = document.getElementById("result");
  
    calculateButton.addEventListener("click", function() {
      const num1 = Number(num1Input.value);
      const num2 = Number(num2Input.value);
      const operation = operationSelect.value;
      let result;
  
      if (operation === "sum") {
        result = num1 + num2;
      } else if (operation === "subtraction") {
        result = num1 - num2;
      } else if (operation === "multiplication") {
        result = num1 * num2;
      } else if (operation === "division") {
        result = num1 / num2;
      }
  
      resultParagraph.textContent = "Resultado: " + result;
    });
  };

  
  
  
  
  