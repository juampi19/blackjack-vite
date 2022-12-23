// turno de la computadora

import { pedirCarta, valorCarta, crearCarta } from "./";


/**
 * 
 * @param {Array<String>} deck 
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Referencia de los puntos html
 * @param {HTMLElement} divCartasComputadora Referencia de las cartas
 */

export const turnoComputadora = ( deck = [] , puntosMinimos, puntosHTML, divCartasComputadora ) => {

    if( !puntosMinimos ) throw new Error( 'Los puntos son necesarios' );
    if( !puntosHTML ) throw new Error( 'Argumento puntosHTML es necesario' );

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora += valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCarta( carta );
        divCartasComputadora.append( imgCarta );

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 500 );
}
