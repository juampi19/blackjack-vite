import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDecarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un deck de cartas
 */


export const crearDeck = ( tiposDecarta, tiposEspeciales ) => {

    if( !tiposDecarta || tiposDecarta === 0 ) throw new Error( 'tiposDecarta es obligatorio' );

    if( !tiposEspeciales || tiposEspeciales === 0 ) throw new Error( 'tiposEspeciales es obligatorio' );

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDecarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDecarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
