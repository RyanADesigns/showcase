import React, {Component} from 'react'



class EvenAndOdd extends Component{
    render(){
        constructor(){
            super()

            this.state = {
                evenArray: [],
                oddArray: [],
                userInput: ''

                handleChange(val) {
                    this.setState({userInput: val });
                }

                assignEvenAndOdds(userInput){
                    userInput = 
                }
              }
            }
        
        return (
            
            <div className="puzzleBox evenAndOddPB">
                <h4>evens and odds</h4>
                <input onChange={ (e) => this.handleChange(e.target.value) } className="inputLine"></input>
                <button onClick={() => this.assignEvenAndOdds(this.state.userInput)} className="confirmationButton">Split</button>
                <span className="resultsBox">Evens:{JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox"> Odds:{JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }

}

export default EvenAndOdd;