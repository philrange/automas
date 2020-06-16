function selectRandomCard(deck) {
    
    if (deck.length == 0) {
        console.log("No cards in deck")
        return null;
    }
    
    var card = deck[Math.floor(Math.random()*deck.length)];

    //remove the card just picked from the deck    
    deck.splice( $.inArray(card, deck), 1 );

    return card;
}