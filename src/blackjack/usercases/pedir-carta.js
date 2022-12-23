
/**
 * Esta función selecciona una carta del deck
 * @param {Array<String>} deck 
 * @returns {String} Retorna una carta del deck
 */


export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'El deck es obligatorio';
    }
    const carta = deck.pop();
    return carta;
}