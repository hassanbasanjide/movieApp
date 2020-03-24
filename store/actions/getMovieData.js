import { API_KEY } from '../../utils/constants';

export const getMovieData = (category) => {
  const page = "1";
  const language = "en-US";

  return async Dispatch => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=${language}&page=${page}`
      );
      const resData = await response.json();

      if (!response.ok) {
        throw new Error("Some thing is going wrong.");
      }

      Dispatch({
        type: "recive_movie_data",
        data: resData.results
      });
    } catch (error) {
      throw error;
    }
  };
};
