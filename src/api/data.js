import axios from 'axios';
const api_key = '130970f633d3844a262d66c82c9a0ac8';
const baseURL = 'api.themoviedb.org';

//  - список самых популярных фильмов на сегодня для создания коллекции на главной странице.!
export const trendingMovies = () => {
    return axios.get(
        `https://${baseURL}/3/trending/all/day?api_key=${api_key}`,
    );
    // .then(response => response.data.results)
    // // .then(response => console.log(response));
    // .then(shows => this.setState({ shows }));
};

// - поиск кинофильма по ключевому слову на странице фильмов.!
export const searchMovies = searchQuery => {
    return axios
        .get(
            `https://${baseURL}/3/search/movie?api_key=${api_key}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
        )
        .then(response => response.data.results);
};

// - запрос полной информации о фильме для страницы кинофильма.???
export const movieInfo = movie_id => {
    return axios.get(
        `https://${baseURL}/3/movie/${movie_id}?api_key=${api_key}&language=en-US `,
    );
};

// - запрос информации о актёрском составе для страницы кинофильма.???
export const actorsInfo = movie_id => {
    return axios.get(
        `https://${baseURL}/3/movie/${movie_id}/credits?api_key=${api_key}&language=en-US `,
    );
};

// - запрос обзоров для страницы кинофильма.???
export const reviewsPageMovies = movie_id => {
    return axios.get(
        `https://${baseURL}/3/movie/${movie_id}/reviews?api_key=${api_key}&language=en-US&page=1 `,
    );
};
