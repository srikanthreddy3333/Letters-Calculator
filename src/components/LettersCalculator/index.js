import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputPhrase = event => {
    this.setState({inputPhrase: event.target.value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="app-container">
        <div className="calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-phrase-container">
            <label htmlFor="phraseText" className="phrase-text">
              Enter the phrase
            </label>
            <input
              type="text"
              id="phraseText"
              className="input-text"
              placeholder="Enter the phrase"
              value={inputPhrase}
              onChange={this.onChangeInputPhrase}
            />
          </div>
          <p className="letters-count">No.of letters: {inputPhrase.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="letters-calculator-img"
        />
      </div>
    )
  }
}

export default LettersCalculator
