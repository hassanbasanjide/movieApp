import API_KEY from '../../utils/constants';

export const rateMovie = (movieId, value) => {
    return async dispatch => {
        try {
            const result = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${API_KEY}`
            );

           const resData = await result.json();
            console.log(resData)
        } catch(error) {
            throw error;
        }
    }
}