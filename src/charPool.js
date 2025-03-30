var charpool = '';
var shuffled = [];

module.exports.getcharacterPool = function (options) {
    const lowercase = 'qwertyuiopasdfghjklzxcvbnm';
    const uppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const numbers = '7984561230';
    const specialCharacters = '~!@#$%^&*()-+=<>?';
    console.log(options)
    if (options.lower) {
        charpool += lowercase;
    }
    if (options.upper) {
        charpool += uppercase;
    }
    if (options.numbr) {
        charpool += numbers;
    }
    if (options.chars) {
        charpool += specialCharacters;
    }
    if(options.avoid.length) {
        const avoid = options.avoid.split('');
        console.log(avoid)
        var removedChars;
        for (let remove of avoid) {
            removedChars = charpool?.replace(remove,'');
            charpool = removedChars
        }
    }
    if (options.mixem) {
        shuffled = Array.from(charpool)?.sort(() => Math.random() - 0.5);
        charpool = shuffled?.toString()?.replace(/,/g, '')
    }
    return charpool
}