const confirmPasswords = () => {
  const pass1 = document.getElementById("pass1").value;
  const pass2 = document.getElementById("pass2").value;
  if (pass1.length < 8 || pass2.length < 8 || pass1 !== pass2) {
    alert("The password not matching");
  }
};

const Resetlabels = () => {
  const pass1 = (document.getElementById("pass1").value = "");
  const pass2 = (document.getElementById("pass2").value = "");
};
