function checkPassword(inputId, page, correctPassword) {
  let password = document.getElementById(inputId).value;

  if(password === correctPassword) {
    window.location.href = page;
  } else {
    alert("Wrong password 💔");
  }
}
