
var charPools = require('./charPool.js');
var bytePool = { randomBytes: require('randombytes') }
const maxRandomValue = 256;
var password = '';
var rIndex;
var rBytes;

function getNewRandomVal() {
    if (!rIndex || rIndex >= rBytes.length) {
        rIndex = 0;
        rBytes = bytePool.randomBytes(maxRandomValue);
    }
    var result = rBytes[rIndex];
    rIndex += 1;
    return result;
};

function randomNumber(maximum) {
    var newRandom = getNewRandomVal();
    while (newRandom >= maxRandomValue - (maxRandomValue % maximum)) {
        newRandom = getNewRandomVal();
    }
    return newRandom % maximum;
}

module.exports.generatePassword = function (options) {
    options = options || {};
    if (!Object.prototype.hasOwnProperty.call(options, 'length')) options.length = 12;
    if (!Object.prototype.hasOwnProperty.call(options, 'lower')) options.lower = true;
    if (!Object.prototype.hasOwnProperty.call(options, 'upper')) options.upper = true;
    if (!Object.prototype.hasOwnProperty.call(options, 'numbr')) options.numbr = true;
    if (!Object.prototype.hasOwnProperty.call(options, 'chars')) options.chars = false;
    if (!Object.prototype.hasOwnProperty.call(options, 'mixem')) options.mixem = false;
    if (!Object.prototype.hasOwnProperty.call(options, 'avoid')) options.avoid = '';
    if (!options.length) {
        throw new Error('Password length cannot be 0');
    }
    if(!options.lower && !options.upper && !options.numbr && !options.chars) {
        throw new Error('Atleast one input options must be true');
    }
    const passwordPool = charPools.getcharacterPool(options);
    var passwordLength = options.length;
    for (let x = 0; x < passwordLength; x++) {
        password += passwordPool[randomNumber(passwordPool.length)]
    }
    return password
}