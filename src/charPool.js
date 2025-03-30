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
        const avoid = options.avoid.split('');
        var removedChars;
        for (let remove of avoid) {
            removedChars = charpool?.replace(remove,'');
            charpool = removedChars
        }
    }

    // Randomize character pool

    if (options.mixem) {
        shuffled = Array.from(charpool)?.sort(() => Math.random() - 0.5);
        charpool = shuffled?.toString()?.replace(/,/g, '')
    }
    
    return charpool
}