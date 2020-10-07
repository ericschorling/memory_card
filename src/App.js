import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard'

const generateDeck =()=> {
  const symbols = [`∆`,` ß`, `£`, `§`,`•`, `$`, `+`, `ø`]
  let deck = []
  for (let i = 0; i < 16; i ++){
    deck = [...deck, {isFlipped:false, Symbol: symbols[i%8]}]
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
    
  }
  render() {
    const cardsJSX = this.state.deck.map((card, index)=>{
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index}/>
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
