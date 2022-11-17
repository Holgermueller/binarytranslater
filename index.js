let output = document.getElementById("outputArea");

const submitForm = () => {
  let binaryToEnglishButton = document.getElementById("btnradio1").checked;
  let englishToBinaryButton = document.getElementById("btnradio2").checked;
  let input = document.getElementById("input").value;

  if (binaryToEnglishButton == true) {
    console.log("b to e");
  }

  if (englishToBinaryButton == true) {
    console.log("E to B");
  }

  englishToBinary(input);
  resetForm();
};

const resetForm = () => {
  let form = document.getElementById("form");
  form.reset();
};

const binaryToEnglish = () => {
  console.log("click");
};

const englishToBinary = (input) => {
  for (let i = 0; i < input.length; i++) {
    output.innerHTML += input[i].charCodeAt(0).toString(2) + " ";
  }
};
