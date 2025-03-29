var charpool = '';
var shuffled = [];

export function getcharacterPool(options) {
    const lowercase = 'qwertyuiopasdfghjklzxcvbnm';
    const uppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const numbers = '7984561230';
    const specialCharacters = '~!@#$%^&*()-+=<>?';
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
    if (options.mixem) {
        shuffled = Array.from(charpool)?.sort(() => Math.random() - 0.5);
        charpool = shuffled?.toString()?.replace(/,/g,'')
    }
    return charpool
}