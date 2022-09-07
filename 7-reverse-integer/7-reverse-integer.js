/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     const stringed = x.toString().split("")
    let multiply_with = 1
    if (stringed[0] == "-") {
        multiply_with = -1
        stringed.shift()
    }
    const reversed_number = Number(stringed.reverse().join(""))
    if (reversed_number > (Math.pow(2,31) - 1)) return 0
    return reversed_number * multiply_with
};