const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");

function generatePassword() {
  const nl = parseInt(document.getElementById("letters").value);
  const nd = parseInt(document.getElementById("numbers").value);
  const ns = parseInt(document.getElementById("symbols").value);

  let password = [];

  for (let i = 0; i < nl; i++) {
    password.push(letters[Math.floor(Math.random() * letters.length)]);
  }

  for (let i = 0; i < nd; i++) {
    password.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }

  for (let i = 0; i < ns; i++) {
    password.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }

  // Shuffle (same as Python random.shuffle)
  password.sort(() => Math.random() - 0.5);

  document.getElementById("result").value = password.join("");
}

function copyPassword() {
  const result = document.getElementById("result");
  result.select();
  document.execCommand("copy");
  alert("Password copied!");
}
