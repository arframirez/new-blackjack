 import {crearDeck, pedirCarta, crearCarta, determinarGanador, valorCarta} from './usecases'

 let deck = []
  
 const tipos      = ['C', 'D', 'H', 'S'];
 const especiales = ['A', 'J', 'Q', 'K'];
 let puntosJugadores = [0,0];
 
 ///referencias ( el querySelector hace referencia al DOM)
 const btnPedir   = document.querySelector('#btnPedir'),
       btnDetener = document.querySelector('#btnDetener'),
       btnnuevo   = document.querySelector('#btnNuevo')
 
       const divCartasJugadores = document.querySelectorAll('.divCartas')
        const puntosHTML = document.querySelectorAll('small')
 

 const inicializarJuego = ( numJugadores = 2) => {
     deck = crearDeck(tipos, especiales);;
 
     puntosJugadores = [];
     for(let i = 0; i< numJugadores; i++ ){
         puntosJugadores.push(0)
     }
 
     puntosHTML.forEach(elem => elem.innerText = 0);
     divCartasJugadores.forEach(elem => elem.innerHTML = '' );
 
     btnPedir.disabled   = false
     btnDetener.disabled = false
 }
 

 
 deck = crearDeck(tipos, especiales);

 export const acumularPuntos =  (carta, turno) => {

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta);
    puntosHTML[turno].innerText = puntosJugadores[turno]
    return  puntosJugadores[turno]
}
 
 // pedirCarta()

 const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0
    do{

       const carta = pedirCarta(deck);
       puntosComputadora =  acumularPuntos(carta, puntosJugadores.length - 1) 
       crearCarta(carta, puntosJugadores.length - 1)

       if(puntosMinimos > 21){
        break;
       }
     } while ((puntosComputadora < puntosMinimos ) && (puntosMinimos <= 21))

        determinarGanador(puntosJugadores)
}

 
 btnPedir.addEventListener('click', () => {
 
     const carta = pedirCarta(deck);
     const puntosJugador= acumularPuntos(carta, 0)
 
     crearCarta(carta, 0);
 
     if ( puntosJugador > 21) { 
     
       btnPedir.disabled = true;
       btnDetener.disabled = true
       turnoComputadora(puntosJugador);

     } else if (puntosJugador  === 21 ) {
        btnDetener.disabled = true
        btnPedir.disabled = true
        turnoComputadora(puntosJugador);

     }
     
 }) 
 
 
 btnDetener.addEventListener('click', () => {
      btnDetener.disabled = true;
      btnPedir.disabled   = true;
 
      turnoComputadora(puntosJugadores[0]);
 
 })
 
 btnnuevo.addEventListener('click', () => {
     console.clear()
     inicializarJuego()
   
 
 })
 