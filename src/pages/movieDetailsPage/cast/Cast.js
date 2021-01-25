import { actorsInfo } from '../../../api/data';
import React, { Component } from 'react';

export default class Cast extends Component {
    state = {
        casts: [],
        error: null,
        isLoding: false,
    };
    componentDidMount() {
        this.setState({ isLoading: true });
        actorsInfo(this.props.location.state.id)
            .then(response => response.data.cast)
            .then(casts => this.setState({ casts }))
            .catch(error => this.setState({ error: error }))
            .finally(() => this.setState({ isLoading: false }));
    }
    render() {
        // console.log('casts >', this.state.casts);

        return (
            <div>
                <h2>Cast</h2>
                {/* <h2>{this.props.match.params.movieId}</h2> */}
                <ul>
                    {this.state.casts.map(cast => (
                        <li key={cast.id}>
                            <h3>{cast.original_name}</h3>

                            {/* {this.state.casts.profile_path !== null ? ( */}
                            <img
                                src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
                                alt={cast.original_name}
                            />
                            {/* ) : null} */}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
