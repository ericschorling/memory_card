import React, {Component} from 'react'
import './MemoryCard.css'
export default class MemoryCard extends Component {

    render (){
        let memoryCardInnerClass = "MemoryCardInner"

        if (this.props.isFlipped){
            memoryCardInnerClass += " flipped"
        }

        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img className="dcLogo" alt="logo" src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"></img>
                    </div>
                    <div className="MemoryCardFront">
                        {this.props.symbol}
                    </div>
                </div>
            </div>
        )
    }
}