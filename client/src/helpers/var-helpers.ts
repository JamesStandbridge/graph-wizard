/**
 * Checks if a variable is defined (neither null nor undefined).
 * @param variable - The variable to check.
 * @returns true if the variable is defined, otherwise false.
 */
export function isDefined(variable: any): boolean {
    return variable !== null && variable !== undefined;
}

/**
 * Checks if a variable is defined and not empty (for strings and arrays).
 * @param variable - The variable to check.
 * @returns true if the variable is defined and not empty, otherwise false.
 */
export function isNotEmpty(variable: string | any[]): boolean {
    return isDefined(variable) && variable.length > 0;
}

/**
 * Checks if a variable is defined and not empty (for objects).
 * @param variable - The variable to check.
 * @returns true if the variable is defined and not empty, otherwise false.
 */
export function isObjectNotEmpty(variable: object): boolean {
    return isDefined(variable) && Object.keys(variable).length > 0;
}
