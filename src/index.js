module.exports = function check(str, bracketsConfig) {

    let newStr = str;

    let brackets = bracketsConfig.map((item) => item.join(''));

    for (let k = 0; k <= str.length / 2; k++) {
        for (let j = 0; j <= brackets.length; j++) {
            newStr = newStr.replace(brackets[j], '')
        }
    }

    if (newStr.length == 0) {
        return true
    } else {
        return false
    }
}
