


/**
 * 
 * @param {string} carta 
 * @param {number} turno 
 */
export const crearCarta = (carta, turno) => {

    if (!carta) throw new Error('La carta es un argumento obligatorio')

    const divCartasJugadores = document.querySelectorAll('.divCartas')
 
    const imgCarta = document.createElement('img');
    imgCarta.src = `/assets/cartas/${carta}.png` 
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta)
}
