const submitForm = () => {
  console.log("click");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let agree = document.getElementById("agree").checked;
  console.log(name, email, agree);

  resetForm();
};

const resetForm = () => {
  let form = document.getElementById("form");
  form.reset();
};
