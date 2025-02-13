/**
 * 
 * @param str {string}
 * @param max {number}
 * @returns  {string}
 */

export function spliceString(str: string, max: number) {
    return str.length > max ? str.slice(0, max) + "..." : str;
}