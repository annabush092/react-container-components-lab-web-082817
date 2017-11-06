import React from 'react'

const MovieReviews = (props) => {
    const allReviews = props.reviews.map(r => (
      <div className='review'>
        <h1> Review Info </h1>
      </div>
    ))

    return (
      <div className='review-list'>
        {allReviews}
      </div>
    )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
