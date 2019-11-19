class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards;
    this.pairsClicked;
    this.pairsGuessed;
    // add the rest of the class properties here
  }
  shuffleCards() {
    Math.floor(Math.random() * cards.length)
  }
  checkIfPair(card1, card2) {}
  isFinished() {}
}