// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, suggestionUpdate} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    suggestionUpdate(suggestion)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <button onClick={onClickSuggestion} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
