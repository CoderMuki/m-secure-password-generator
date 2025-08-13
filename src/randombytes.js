/**
 * Generates secure random bytes.
 * This function is designed to work in both Node.js and browser environments.
 * @returns Random bytes array
 * This function generates a secure random byte array of the specified length.
 */
function getRandomBytes(length) {
    if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
        // Browser environment
        const array = new Uint8Array(length);
        window.crypto.getRandomValues(array);
        return array;
    } else if (typeof require === 'function') {
        // Node.js environment
        try {
            const crypto = require('crypto');
            return crypto.randomBytes(length);
        } catch (e) {
            throw new Error('Secure random number generation not supported.');
        }
    } else {
        throw new Error('Secure random number generation not supported.');
    }
}

module.exports = getRandomBytes;