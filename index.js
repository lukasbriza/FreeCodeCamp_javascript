import {palindrome} from './palindrome.js'
import {romanNumbersConvertor} from './romanNumbersConvertor.js'

let palindromeBtn = document.getElementById("palindrome-button")
let romanNumbersConvertorBtn = document.getElementById("romanNumbers-button")

palindromeBtn.addEventListener("click", ()=>{
    let result = palindrome(document.getElementById("palindrome-text").value)
    if (result == true) {
        alert("Is palindrome.")
    } else {
        alert("Isn´t palindrome.")
    }
})
romanNumbersConvertorBtn.addEventListener("click", ()=>{
    let result = romanNumbersConvertor(document.getElementById("romanNumbers-text").value)
    alert(result)
})