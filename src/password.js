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
    if (!Object.prototype.hasOwnProperty.call(options, 'strct')) options.strct = false;
    if (!options.length) {
        throw new Error('Password length cannot be 0');
    }
    if(!options.lower && !options.upper && !options.numbr && !options.chars) {
        throw new Error('Atleast one input options must be true');
    }
    if(options.strct) {
        var minlength = 1 + options.lower + options.upper + options.numbr + options.chars;
        if(minlength > options.length) {
            throw new Error('Password request length must be greater than selected options');
        }
    }
    
    const passwordPool = charPools.getcharacterPool(options); // Password Characters Pool
    
    var password = '';
    password = makePassword(options, passwordPool);

    return password;
}   

function makePassword(options, pool) { // Function to generate password from options
    var tempPass = '';
    for (let x = 0; x < options.length; x++) { // Password generated
        tempPass += pool[randomNumber(pool.length)]
    }
    // Strict characters validation
    if(options.strct) {
        var haveall = charPools.strict.strictsCheck.every( check => {
            if(!options[check.type]) {return true};
            // test generated password to include characters from all opted options
            return check.mustHave.test(tempPass);
        })
        if(!haveall) return makePassword(options,pool)
    }
    return tempPass;
}