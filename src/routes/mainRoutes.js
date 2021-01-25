// /* eslint-disable import/no-anonymous-default-export */
// export default {
//     home: '/',
//     movieDetalis: '/movies/:movieId',
//     movies: '/movies',
//     cast: '/movies/:movieId/cast',
//     reviews: '/movies/:movieId/reviews',
// };
import { lazy } from 'react';

export const mainRoutes = [
    {
        path: '/',
        name: 'Home',
        exact: true,
        component: lazy(() =>
            import(
                '../pages/homePage/HomePage' /* webpackChunkName: "HomePage" */
            ),
        ),
    },
    {
        path: '/movies',
        name: 'Movies',
        exact: false,
        component: lazy(() =>
            import(
                '../pages/moviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */
            ),
        ),
    },
];
export const secondRoutes = [
    {
        path: '/movies/:movieId',
        name: 'movieDetalis',
        exact: false,
        component: lazy(() =>
            import(
                '../pages/movieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
            ),
        ),
    },
];
