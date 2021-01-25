import React, { Component } from 'react';
import { trendingMovies } from '../api/data';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    state = {
        shows: [],
    };

    componentDidMount() {
        trendingMovies()
            .then(response => response.data.results)
            .then(shows => this.setState({ shows }));
    }

    render() {
        const { shows } = this.state;
        console.log('trendingMovies>', shows);
        return (
            <>
                <h2>Trending Movies</h2>
                <ul>
                    {shows.map(show => (
                        <li key={show.id}>
                            <Link
                                to={{
                                    pathname: `/movies/${show.id}`,
                                    state: { from: this.props.location },
                                }}
                            >
                                <h3>{show.name ? show.name : show.title}</h3>
                                <img
                                    src={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
                                    alt={show.alt}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

// {
//     /* <img
//                                     src={`https://image.tmdb.org/t/p/w300${show.backdrop_path}`}
//                                     alt={show.alt}
//                                 /> */
// }

// {/* poster_path
// ? `https://image.tmdb.org/t/p/w300${poster_path}`
// : `https://image.freepik.com/free-vector/glitch-error-404-page-background_23-2148086227.jpg` */}
