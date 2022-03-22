import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResult = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            className="search-text"
            placeholder="Search"
            value={searchInput}
            onChange={this.onChangeSearchValue}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-img"
            alt="search icon"
          />
        </div>

        <ul className="sub-container">
          {searchResult.map(eachDestinationDetails => (
            <DestinationItem
              eachDestinationDetails={eachDestinationDetails}
              key={eachDestinationDetails.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
