
/**
 * Crear la carta html
 * @param {String} carta 
 * @returns {HTMLImageElement} Imagen de retorno
 */

export const crearCarta = ( carta ) => {

    if( !carta ) throw new Error( 'La carta debe ser obligatoria' );

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    
    return imgCarta;

}