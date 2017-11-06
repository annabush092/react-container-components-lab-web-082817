import React from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?` + `api-key=${NYT_API_KEY}` + `query=`;


class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: "",
      reviews: []
    }
  }

  handleSubmit(ev) {
    ev.preventDefault()
    fetch(URL + this.state.serachTerm)
    .then(res => res.json())
    .then(json => {
      this.setState({reviews: json})
    })
  }

  handleChange(ev) {
    this.setState({searchTerm: ev.target.value})
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Search:</label>
          <input type="text" onChange={this.handleChange.bind(this)}></input>
          <input type="submit" value="Submit"></input>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
