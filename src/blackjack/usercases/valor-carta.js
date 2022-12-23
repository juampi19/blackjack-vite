
/**
 * Esta función obtiene el valor de la carta
 * @param {String} carta Ejemplo: '2K'
 * @returns {Number} Retorna el valor de la carta
 */


export const valorCarta = ( carta ) => {

    if( !carta ) throw new Error( 'La carta debe ser obligatoria' );

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}