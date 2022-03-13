import { palindrome } from "./palindrome.js";
import { romanNumbersConvertor } from "./romanNumbersConvertor.js";
import { caesarCipher } from "./caesarCipher.js";
import { telephoneNumValidator } from "./telephoneNumValidator.js";

let palindromeBtn = document.getElementById("palindrome-button");
let romanNumbersConvertorBtn = document.getElementById("romanNumbers-button");

palindromeBtn.addEventListener("click", () => {
  let result = palindrome(document.getElementById("palindrome-text").value);
  if (result == true) {
    alert("Is palindrome.");
  } else {
    alert("Isn´t palindrome.");
  }
});
romanNumbersConvertorBtn.addEventListener("click", () => {
  let result = romanNumbersConvertor(
    document.getElementById("romanNumbers-text").value
  );
  alert(result);
});

let caesarCipherBtn = document.getElementById("cipher-button");
let caesarCipherTxt = document.getElementById("cipher-text");
let caesarCipherResult = document.getElementById("cipher-result");

caesarCipherBtn.addEventListener("click", () => {
  caesarCipherResult.innerHTML = caesarCipher(caesarCipherTxt.value);
});

let telephoneNumValidatorBtn = document.getElementById(
  "telephoneNumValidator-button"
);
let telephoneNumValidatorTxt = document.getElementById(
  "telephoneNumvalidator-text"
);
let telephoneNumValidatorResult = document.getElementById(
  "telephoneNumValidator-result"
);

telephoneNumValidatorBtn.addEventListener("click", () => {
  telephoneNumValidatorResult.innerHTML = telephoneNumValidator(
    telephoneNumValidatorTxt.value
  );
});
