let userform = document.getElementById("form");
let userentries = [];
const saveUserForm = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptTerms = document.getElementById("acceptTerms").checked;

  const entry = {
    name,
    email,
    password,
    dob,
    acceptTerms,
  };
  const tableBody = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];
  const newRow = tableBody.insertRow();

  newRow.insertCell(0).textContent = name;
  newRow.insertCell(1).textContent = email;
  newRow.insertCell(2).textContent = password;
  newRow.insertCell(3).textContent = dob;
  newRow.insertCell(4).textContent = acceptTerms;

  userentries.push(entry);
  localStorage.setItem("user-entries", JSON.stringify(userentries));
};

userform.addEventListener("submit", saveUserForm);
