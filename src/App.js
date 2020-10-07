import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard'

const generateDeck =()=> {
  const symbols = [`∆`,` ß`, `£`, `§`,`•`, `$`, `+`, `ø`]
  let deck = []
  for (let i = 0; i < 16; i ++){
    deck = [...deck, {isFlipped:false, symbol: symbols[i%8]}]
  }
  shuffle(deck)
  console.log(deck)
  return deck
}

const shuffle = (plainDeck) => {
  for (let i = plainDeck.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [plainDeck[i], plainDeck[j]] = [plainDeck[j], plainDeck[i]]
  }
  return plainDeck
}

class App extends React.Component {
  constructor(props){
    super(props)
  
    this.state ={
      deck: generateDeck(),
      pickedCards: [],
    }
  }
  pickCard(cardIndex) {
    if(this.state.deck[cardIndex].isFlipped)
    {
      return;
    }
    let cardToFlip = {...this.state.deck[cardIndex]}
    cardToFlip.isFlipped = true
    let newPickedCards = this.state.pickedCards.concat(cardIndex)
    let newDeck = this.state.deck.map((card, index)=>{
      if(cardIndex === index){
        return cardToFlip
      }
      return card
    });
    if(newPickedCards.length === 2){
      let card1Index= newPickedCards[0]
      let card2Index= newPickedCards[1]
      if(newDeck[card1Index].symbol !== newDeck[card2Index].symbol){
        //console.log('wrong', card1Index, card2Index)
        setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000)
      }
      newPickedCards = [];
    }
    //console.log(newDeck)
    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards
    })
  }
  unflipCards (card1Index, card2Index) {
    let card1 = {...this.state.deck[card1Index]}
    let card2 = {...this.state.deck[card2Index]}
    card1.isFlipped = false;
    card2.isFlipped = false;
    console.log(card1, card2)
    let newDeck = this.state.deck.map((card, index)=>{
      if(card1Index === index){
        console.log('card1', card1)
        return card1
      }
      if(card2Index === index){
        return card2
      }
      return card
    })
    console.log(newDeck)
    this.setState({
      deck: newDeck,
    })
  }
  render() {
    const cardsJSX = this.state.deck.map((card, index)=>{
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} pickCard={this.pickCard.bind(this, index)}/>
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h2>Match Cards to Win</h2>
        </header>
        <div className="toprow">
          {cardsJSX.slice(0,4)}
        </div>
        <div className="secondrow">
          {cardsJSX.slice(4,8)}
        </div>
        <div className="thirdrow">
          {cardsJSX.slice(8,12)}
        </div>
        <div className="bottomrow">
          {cardsJSX.slice(12,16)}
        </div>
      </div>
    );
  }
}

export default App;
