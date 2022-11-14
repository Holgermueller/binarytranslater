let output = document.getElementById("outputArea");

const submitForm = () => {
  let input = document.getElementById("input").value;

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
