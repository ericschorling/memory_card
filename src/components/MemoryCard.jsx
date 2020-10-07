import React, {Component} from 'react'
import './MemoryCard.css'
export default class MemoryCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            isFlipped: false,
        }
    }
    clickHandler() {
        this.setState({
            isFlipped: !this.state.isFlipped
        }
        )
    }

    render (){
        let memoryCardInnerClass = "MemoryCardInner"

        if (this.props.isFlipped){
            memoryCardInnerClass += " flipped"
        }

        return (
            <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
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