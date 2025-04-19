export interface passwordOptions {
/*--------Password Length--------*/
    /**
     * Set password length
     * @default 12
     * @since v1.0.0
     */
    length?: number;

/*--------Lowercase--------*/
    /**
     * Include lowercase alphabets
     * @default true
     * @since v1.0.0
     */
    lower?: boolean;

/*--------Uppercase--------*/
    /**
     * Include uppercase ALPHABETS
     * @default true
     * @since v1.0.0
     */
    upper?: boolean;

/*--------Numbers--------*/    
    /**
     * Include Numbers 0-9
     * @default true
     * @since v1.0.0
     */
    numbr?: boolean;

/*--------Special Characters--------*/
    /**
     * Include Special Characters
     * @summary ~!@#$%^&*()-+=<>?
     * @default false
     * @since v1.0.0
     */
    chars?: boolean;
    
/*--------Mix Characters--------*/
    /**
     * Mix generated pool of characters 
     * @default false
     * @since v1.0.0
     */
    mixem?: boolean;
    
/*--------Avoid Characters--------*/
    /**
     * Custom charcters to exclude from password
     * @default ""
     * @since v1.0.0
     */
    avoid?: string;

/*--------Strict Options--------*/
    /**
     * Password must include atleast one charcter from opted options
     * @default false
     * @since v1.5.1
     */
    strct?: boolean;
}

/**
 * Generate password using given options
 * @param options 
 */

export function generatePassword(options?: passwordOptions): string;