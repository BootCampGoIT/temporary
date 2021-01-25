import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { searchMovies } from '../../api/data';
import Searchbox from '../../components/Searchbox';
import getQueryParams from '../../utils/getQueryParam';
// import { Route } from 'react-router-dom';
// import Reviews from './Reviews';

export default class Shows extends Component {
    state = {
        movies: [],
    };
    componentDidMount() {
        // searchMovies('cat')
        //     .then(movies => this.setState({ movies }));
        const { query } = getQueryParams(this.props.location.search);

        if (query) {
            searchMovies(query).then(movies => this.setState({ movies }));
        }
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log('this.props>', this.props);
        // const prevQuery = getQueryParams(prevProps.location.search);
        // const nextQuery = getQueryParams(this.props.location.search);
        const { query: prevQuery } = getQueryParams(prevProps.location.search);
        const { query: nextQuery } = getQueryParams(this.props.location.search);
        // console.log('prevParams :', prevQuery);
        // console.log('nextParams :', nextQuery);
        if (prevQuery !== nextQuery) {
            searchMovies(nextQuery).then(movies => this.setState({ movies }));
        }
    }
    handleSearchQuery = query => {
        // console.log('query', query);
        console.log('this.props.location', this.props.location)
        this.props.history.push({
            // pathname: this.props.location.pathname,
            ...this.props.location,
            search: `query=${query}`,
        });
    };

    render() {
        const { movies } = this.state;
        console.log('searchMovies>', movies);
        return (
            <>
                <h2>Search Movies</h2>

                <Searchbox onSubmit={this.handleSearchQuery} />

                {movies.length > 0 && (
                    <ul>
                        {movies.map(movie => (
                            <li key={movie.id}>
                                <Link
                                    to={{
                                        pathname: `${this.props.match.url}/${movie.id}`,
                                        state: { from: this.props.location },
                                    }}
                                >
                                    <h3>
                                        {movie.name ? movie.name : movie.title}
                                    </h3>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                        alt={movie.alt}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </>
        );
    }
}

// {/* <Link
//     to={`/this.props.match.url/${show.id}`}
//     className="link"
// >
//     {show.name}
// </Link> */}
//
// ===============
// const shows = [
//     { id: 'id-1', name: 'Show-1' },
//     { id: 'id-2', name: 'Show-2' },
//     { id: 'id-3', name: 'Show-3' },
//     { id: 'id-4', name: 'Show-4' },
// ];
// const Shows = (/* { match } */) => {
//     return (
//         <div>
//             <h2>Shows Views</h2>
//             <ul>
//                 {shows.map(show => (
//                     <li key={show.id}>
//                         <Link to={`/shows/${show.id}`} className="link">
//                             {show.name}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Shows;
