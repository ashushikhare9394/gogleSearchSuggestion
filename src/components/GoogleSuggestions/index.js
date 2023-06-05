// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestion extends Component {
  state = {searchInput: ''}

  suggestionUpdate = value => {
    this.setState({searchInput: value})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filterResult = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.onChangeInput}
              value={searchInput}
            />
          </div>
          <ul>
            {filterResult.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                suggestionDetails={eachItem}
                suggestionUpdate={this.suggestionUpdate}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestion
