export interface passwordOptions {
/*--------Password Length--------*/
    /**
     * Set password length
     * @default 12
     */
    length?: number;

/*--------Lowercase--------*/
    /**
     * Include lowercase alphabets
     * @default true
     */
    lower?: boolean;

/*--------Uppercase--------*/
    /**
     * Include uppercase ALPHABETS
     * @default true
     */
    upper?: boolean;

/*--------Numbers--------*/    
    /**
     * Include Numbers 0-9
     * @default true
     */
    numbr?: boolean;

/*--------Special Characters--------*/
    /**
     * Include Special Characters
     * @summary ~!@#$%^&*()-+=<>?
     * @default false
     */
    chars?: boolean;
    
/*--------Mix Characters--------*/
    /**
     * Mix generated pool of characters 
     * @default false 
     */
    mixem?: boolean;
    
/*--------Avoid Characters--------*/
    /**
     * Custom charcters to exclude from password
     * @default ""
     */
    avoid?: string;
}

/**
 * Generate password using given options
 * @param options 
 */

export function generatePassword(options?: passwordOptions): string;