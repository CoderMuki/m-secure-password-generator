/**
 * Strict check exported for password validation to include diverse charcters from pool 
 */
const strictsCheck = [
    { type: 'lower', mustHave: /[a-z]/ },
    { type: 'upper', mustHave: /[A-Z]/ },
    { type: 'numbr', mustHave: /[0-9]/ },
    { type: 'chars', mustHave: /[~!@#$%^&*()-+=<>?]/ }
];

module.exports.strict = { strictsCheck };

module.exports.getcharacterPool = function (options) {
    var shuffled = [];
    var charpool = '';
    /**
    * Character pool selection from options
    */

    const lowercase = 'qwertyuiopasdfghjklzxcvbnm';
    const uppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const numbers = '7984561230';
    const specialCharacters = '~!@#$%^&*()-+=<>?';

    // Adding characters to pool based on options

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

    // Removing characters based on user input 

    if(options.avoid.length) {
        for(let x=options.avoid.length; x>0 ; x--) {
            charpool = charpool?.replace(options.avoid[x-1],'');
        }
    }

    // Randomize character pool

    if (options.mixem) {
        shuffled = Array.from(charpool)?.sort(() => Math.random() - 0.5);
        charpool = shuffled?.toString()?.replace(/,/g, '')
    }
    
    return charpool
}