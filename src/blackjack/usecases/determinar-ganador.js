


export const determinarGanador = (puntosJugadores) => {
     
     const [puntosMinimos, puntosComputadora] = puntosJugadores
 
     setTimeout(() => {
         if(puntosComputadora === puntosMinimos){
             alert('Nadie gana :(');
         } else if (puntosMinimos > 21) {
             alert('computadora gana'); 
         } else if (puntosComputadora > 21) {
             alert('jugador Gana');
         } else {
             alert('Computadora gana')
         }
     }, 300)
 }
