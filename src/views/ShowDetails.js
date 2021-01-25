import React, { Component } from 'react';
import { movieInfo } from '../api/data';
import { Link } from 'react-router-dom';
// import Reviews from './Reviews';
import routes from '../routes';

export default class ShowDetails extends Component {
    state = {
        movie: null,
    };

    componentDidMount() {
        movieInfo(this.props.match.params.movieId)
            .then(response => response.data)
            .then(movie => this.setState({ movie }));
    }
    handleGoBack = () => {
        console.log('go back');

        if (this.props.location.state && this.props.location.state.from) {
            // console.log(this.props.location.state.from);
            return this.props.history.push(this.props.location.state.from);
        }
        this.props.history.push(routes.home);
    };

    render() {
        const { movie } = this.state;
        console.log('movieInfo>', movie);
        return (
            <>
                <div>
                    <button type="button" onClick={this.handleGoBack}>
                        &lsaquo;
                    </button>
                    {this.state.movie && (
                        <>
                            <h2>Show Details</h2>
                            <img
                                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                alt={movie.alt}
                            />
                            <h2> {movie.name ? movie.name : movie.title}</h2>

                            {/* <h2>{this.props.match.params.movieId}</h2> */}
                        </>
                    )}
                </div>

                <hr />

                <div>
                    <p>Additional information</p>
                    <ul>
                        <li>
                            <Link to={`${this.props.match.path}/:movieId `}>
                                Cast
                            </Link>
                        </li>
                        <li>
                            <Link to={`${this.props.match.path}/:movieId `}>
                                Reviews
                            </Link>
                        </li>
                    </ul>
                    {/* <Route
                        path={`${this.props.match.path}/:movieId `}
                        component={Reviews}
                    /> */}
                </div>
                <hr />
            </>
        );
    }
}
