function palindrome (inp) {
    let input = inp.toString().toLowerCase()
    
    //TO ARRAY
    function toArray(str){
        let arr = []
        for(let i = 0; i < str.length; i++){
            arr.push(str[i])
        }
        return arr
    }
    //SPECIAL CHARACTERS CHECK AND REPLACE
    input = input.replaceAll(",","")
    input = input.replaceAll(".", "")
    input = input.replaceAll("_", "")
    input = input.replaceAll("-", "")
    input = input.replaceAll(" ", "")
    input = input.replaceAll("(", "")
    input = input.replaceAll(")", "")
    //PROCESSING
    let isPalindrome = true
    let fnInput = toArray(input)
    let revInput = toArray(input).reverse()

    for(let i = 0; i < input.length; i++){
        if(fnInput[i] == revInput[i]){
        } else {
           isPalindrome = false
        }
    }
    console.log(isPalindrome)
    return isPalindrome
}

export {palindrome}
