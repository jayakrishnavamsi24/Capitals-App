import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    selectedCountry: countryAndCapitalsList[0].country,
    countryId: countryAndCapitalsList[0].id,
  }

  onCapitalChange = event => {
    const countryId = event.target.value
    const countryList = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === countryId,
    )

    this.setState({selectedCountry: countryList.country, countryId})
  }

  render() {
    const {selectedCountry, countryId} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1> Countries and Capitals </h1>
          <div className="selection-container">
            <select value={countryId} onChange={this.onCapitalChange}>
              {countryAndCapitalsList.map(eachCountry => (
                <option key={eachCountry.id} value={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p> is capital of which country </p>
          </div>
          <p className="selected-country">{selectedCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
