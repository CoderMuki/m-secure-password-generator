# M-Secure Password Generator

### A simple package to generate passwords

[![M-Secure Password Generator](https://nodei.co/npm/m-secure-password-generator.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/m-secure-password-generator)

A simple password generator package with support for browsers.

### Features

-   Import and generate passwords instantly.
-   Add options to create password as you need.
-   Includes Numbers, Special Characters, Upper and Lowercase Alphabets.
-   Special option to mix pool of characters for password generation.
-   Option to exclude specific characters from your passwords.
-   Option to strictly evaluate password to include atleast one character from each option.
-   Now optimized for performance speeds - range: `0.13ms - 0.54ms`

## How to install?

```
npm i m-secure-password-generator
```

## Password Options

__All options set to false or password length of zero throws and error__

| Options                  | Type    |   Description                                                | Default |
|--------------------------|---------|--------------------------------------------------------------|---------|
| length                   | Number  |  Set password length.                                        | 12      |
| lower                    | Boolean |  Include lowercase alphabets.                                | true    |
| upper                    | Boolean |  Include uppercase ALPHABETS.                                | true    |
| numbr                    | Boolean |  Include Numbers 0-9.                                        | true    |
| chars                    | Boolean |  Include Special Characters. ~!@#$%^&*()-+=<>?               | false   |
| mixem                    | Boolean |  Mix generated pool of characters.                           | false   |
| avoid                    | String  |  Custom charcters to exclude from password. *for eg*: 'm#K!l'| ''      |
| strct                    | Boolean |  Strict validation - include all opted option's characters   | false   |


## How to use?

`generatePassword()` or `generatePassword({passwordOptions})`

>   Generate passoword with or without added options; Generated password is returned as a string.

```javascript
import {generatePassword} from 'm-secure-password-generator'

let password = generatePassword();

            or

let password = generatePassword({
    length : 15,
    lower : true,
    upper : true,
    numbr : true,
    chars : true,
    mixem : true,
    avoid : 'm#K!l',
    strct : true
})

console.log(password);

// Output : 7*?IbV9UXyNqti~
```

## Credits

- Javascript
- Typescript
- [Generate Password](https://github.com/brendanashworth/generate-password)
- [Generate Password Browser](https://github.com/oliver-la/generate-password-browser)


<p align="left">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" />
</p>


### Note from Author:

-   This is my first npm package.
-   Liked this? share it to your friends.

__If you believe you can make valuable changes and contribute to this package, please do so by sending in a Pull Request__