import { randomBytes as bytePool } from 'crypto';
import  * as charPool  from './charPool.js'

const maxRandomValue = 256;

var password = ''; //! Figure out how to use .d.ts options

var rIndex;
var rBytes;

function getNewRandomVal() {
	if (!rIndex || rIndex >= rBytes.length) {
		rIndex = 0;
		rBytes = bytePool(maxRandomValue);
	}

	var result = rBytes[rIndex];
	rIndex += 1;
	return result;
};

function randomNumber(maximum) {
    var newRandom = getNewRandomVal();
    while(newRandom >= maxRandomValue - (maxRandomValue % maximum)) {
        newRandom = getNewRandomVal();
    }
    return newRandom % maximum;
}

export function generatePassword(options) {
    const passwordPool = charPool.getcharacterPool(options);  
    for(let x = 0; x < options.length; x++) {
        password += passwordPool[randomNumber(passwordPool.length)]
    }
    console.log(password)
    return password
}

var options = {
    length : 15,
    lower : true,
    upper : true,
    numbr : true,
    chars : true,
    mixem : true
}
generatePassword(options)

// export default getNewRandomVal;