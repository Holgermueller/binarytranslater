let output = document.getElementById("outputArea");

const submitForm = () => {
  let binaryToEnglishButton = document.getElementById("btnradio1").checked;
  let englishToBinaryButton = document.getElementById("btnradio2").checked;
  output.innerHTML = "";
  let input = document.getElementById("input").value;

  if (input === "") {
    output.innerHTML = "Please enter a value...";
  } else {
    if (binaryToEnglishButton == true) {
      binaryToEnglish(input);
    }

    if (englishToBinaryButton == true) {
      englishToBinary(input);
    }
  }

  resetForm();
};

const resetForm = () => {
  let form = document.getElementById("form");
  form.reset();
};

const binaryToEnglish = () => {
  output.innerHTML = "Under Construction...";
};

const englishToBinary = (input) => {
  for (let i = 0; i < input.length; i++) {
    output.innerHTML += input[i].charCodeAt(0).toString(2) + " ";
  }
};
