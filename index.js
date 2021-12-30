import {palindrome} from './palindrome.js'

let palindromeBtn = document.getElementById("palindrome-button")
let palindromeTxt = document.getElementById("palindrome-text").value

palindromeBtn.addEventListener("click", ()=>{
    palindrome(palindromeTxt)
})