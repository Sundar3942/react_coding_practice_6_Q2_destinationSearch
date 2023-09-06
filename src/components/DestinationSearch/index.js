/* eslint-disable no-unused-vars */
// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {
    searchSequence: '',
  }

  onSearchInput = event => {
    this.setState({searchSequence: event.target.value})
  }

  render() {
    const {searchSequence} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchSequence.toLowerCase()),
    )
    console.log(searchResults)
    return (
      <div className="page">
        <h1>Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            value={searchSequence}
            className="search-input"
            placeholder="Search"
            onChange={this.onSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>

        <ul className="list-container">
          {searchResults.map(each => (
            <DestinationItem item={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
