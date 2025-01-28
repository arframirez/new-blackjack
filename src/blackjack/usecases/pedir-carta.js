 
 /**
  * @param{Array<string>}deck
  * @returns{string} retorna la carta pedida
  */
 
export const pedirCarta = (deck) => {

    if(deck.length === 0) {
        throw 'No hay mas cartas'
    }
    return deck.pop()
}