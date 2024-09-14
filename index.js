let userform = document.getElementById("form");

let entries = [];

verify = (elem, message, cnd) => {
  if (cnd) {
    elem.style.border = "2px solid red";
    elem.setCustomValidity(message);
    elem.reportValidity();
  } else {
    elem.style.border = "2px solid green";
    elem.setCustomValidity("");
  }
};

checkDOB = () => {
  let age = new Date().getFullYear() - new Date(dob.value).getFullYear();
  if (age < 18 || age > 55) {
    return false;
  } else {
    return true;
  }
};

let message_dob = "Your age must be between 18 and 55 to continue";

dob.addEventListener("input", (e) => {
  let cond_dob = !checkDOB();
  e.preventDefault();
  verify(dob, message_dob, cond_dob);
});

const retrieve = () => {
  let dentries = localStorage.getItem("form");
  if (dentries) {
    entries = JSON.parse(dentries);
  } else {
    entries = [];
  }
  return entries;
};

let retrieval = retrieve();

const displayEntries = () => {
  const entries = retrieve();
  const tableEntries = entries
    .map((entry) => {
      const namecell = `<td>${entry.name}</td>`;
      const emailcell = `<td>${entry.email}</td>`;
      const passwordcell = `<td>${entry.password}</td>`;
      const dobcell = `<td>${entry.dob}</td>`;
      const acceptTermscell = `<td>${entry.acceptedTermsAndconditions}</td>`;
      const row = `<tr>${namecell}${emailcell}${passwordcell}${dobcell}${acceptTermscell}</tr>`;
      return row;
    })
    .join("\n");
  const table = `<table><tr><th>Name</th><th>Email</th><th>Password</th><th>dob</th><th>accepted terms?</th></tr>${tableEntries}</table>`;

  let details = document.getElementById("table");
  details.innerHTML = table;
};

const saveData = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTermsAndconditions =
    document.getElementById("acceptTerms").checked;

  const entry = {
    name,
    email,
    password,
    dob,
    acceptedTermsAndconditions,
  };

  entries.push(entry);

  localStorage.setItem("form", JSON.stringify(entries));
  displayEntries();
};

userform.addEventListener("submit", saveData);
displayEntries();
