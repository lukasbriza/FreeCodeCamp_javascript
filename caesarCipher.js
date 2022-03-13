let ciphers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let exception = [" ",".",",","?","!",":","0","1","2","3","4","5","6","7","8","9"]

function isException(input){
    let result = false
    exception.forEach((exceptionPiece) => {
        if(exceptionPiece == input){
            result=true
        }
    })
    return result
}
function caesarCipher(input){
    input = input.toString().toUpperCase()

    let inputArr= input.split("")
    let resultArr = []

    inputArr.forEach((inputPiece)=>{
        if(isException(inputPiece) === false){
            let index = ciphers.indexOf(inputPiece)
            if(index <= 12){
                resultArr.push(ciphers[index+13])
            } else {
                resultArr.push(ciphers[index+13-26])
            }
        } else {
            resultArr.push(inputPiece)
        }
    })

    let result = resultArr.join("")
    return result
}

export {caesarCipher}