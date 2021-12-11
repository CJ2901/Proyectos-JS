let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Barajea las cartas
const crearDeck = () => {

    for ( let i = 2 ; i <= 10 ; i++){
        for( let tipo of tipos ){
            deck.push( i + tipo );    
        }        
    }

    for( let tipo of tipos ){
        for ( let esp of especiales){
            deck.push( esp + tipo );
        }
    }
   
    // shuffle regresa un nuevo arreglo
    deck = _.shuffle( deck );
}

crearDeck();

// Pide las cartas
const pedirCarta = () => {
    
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
   
    const carta = deck.pop();
    return carta;
}

const valorCarta = (carta) => {
    const valor = carta.substring( 0 , carta.length - 1 )
    return ( isNaN( valor ) ) ? 
            ((valor === "A") ? 11 : 10)
            : valor * 1 ;
}

// const valor = valorCarta( pedirCarta() );


// Eventos