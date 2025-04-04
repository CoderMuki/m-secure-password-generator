if (typeof(window) !== 'undefined') { // https://github.com/CoderMuki/m-secure-password-generator/issues/4
	window.global = window.global || window;
}

var charPools = require('./charPool.js'); // Password Character Pool Generator
var bytePool = { randomBytes: require('randombytes') } // Get Random Bytes Pool 
const maxRandomValue = 256;
var rIndex;
var rBytes;

function getNewRandomVal() { // Get Random value from bytePool
    if (!rIndex || rIndex >= rBytes.length) {
        rIndex = 0;
        rBytes = bytePool.randomBytes(maxRandomValue);
    }
    var result = rBytes[rIndex];
    rIndex += 1;
    return result;
};

function randomNumber(maximum) { // Random value to pick from character pool
    var newRandom = getNewRandomVal();
    while (newRandom >= maxRandomValue - (maxRandomValue % maximum)) {
        newRandom = getNewRandomVal();
    }
    return newRandom % maximum;
}

module.exports.generatePassword = function (options) {
    // Password default options
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
    const passwordPool = charPools.getcharacterPool(options); // Password Characters Pool
    var passwordLength = options.length;
    var password = '';
    for (let x = 0; x < passwordLength; x++) { // Password generated
        password += passwordPool[randomNumber(passwordPool.length)]
    }
    
    return password
}