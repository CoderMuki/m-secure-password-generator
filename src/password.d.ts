export interface passwordOptions {
    length?: number;
    lower?: boolean;
    upper?: boolean;
    numbr?: boolean;
    chars?: boolean;
    mixem?: boolean;
    avoid?: string;
}

export function generatePassword(options?: passwordOptions): string;