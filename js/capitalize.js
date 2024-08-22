/**
 * Gautas tekstas yra performatuojamas taip, jog visos raides tampa mazosios isskyrus pirmos tampa didziosiomis.
 * @param {string} str Tekstas. 
 * @example
 * // returns 'Labas'
 * capitalize('labas');
 * @example
 * // returns 'Labas Rytas'
 * capitalize('LABAS RYTAS');
 * @returns Performatuotas tekstas.
 */
export function capitalize(str) {
    // labas -> Labas
    // LABAS -> Labas
    // labas rytas -> Labas Rytas
    // LABAS RYTAS -> Labas Rytas

    return str
        .split(' ')
        .map(word =>
            word[0].toUpperCase()
            + word.slice(1).toLowerCase())
        .join(' ');
}
