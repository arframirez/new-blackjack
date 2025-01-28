/**
 * 
 * @param {Array<String>} tiposDeCarta 
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0 )
     throw new Error ('tiposDeCarta es obligatorio como un arreglo de string');

    if (!tiposEspeciales || tiposEspeciales.length === 0 )
     throw new Error ('tiposDeCarta es obligatorio como un arreglo de string');


    let deck = [];
 
    for( let i = 2; i <= 10; i++) {
        for(let tipo of tiposDeCarta) {
            deck.push(i + tipo );
        }
    }

    for( let tipo of tiposDeCarta){
         for(let esp of tiposEspeciales){
            deck.push(esp + tipo)
         }
   }  
   
   const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
   };
   
    return shuffleDeck(deck);
}