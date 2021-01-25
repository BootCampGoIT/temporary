import React, { Component } from 'react';
import { reviewsPageMovies } from '../../../api/data';

export default class Reviews extends Component {
    state = {
        reviews: [],
    };
    componentDidMount() {
        reviewsPageMovies(this.props.location.state.id)
            .then(response => response.data.results)
            .then(reviews => this.setState({ reviews }));
    }
    render() {
        console.log('reviews >', this.props.location.state.id);
        return (
            <div>
                <h2>{this.props.match.params.movieId}</h2>
                <h2>Rewievs</h2>
                {this.state.reviews.length !== 0 ? (
                    <ul>
                        {this.state.reviews.map(review => (
                            <li key={review.id}>
                                <h3>Author: {review.author}</h3>
                                <p>{review.content}</p>
                                <a href={review.url}>{review.url}</a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>We don't have any reviews for this movie.</p>
                )}
            </div>
        );
    }
}
