import { API_KEY } from "../../utils/constants";

export const getMovieData = category => {
  const page = "1";
  const language = "en-US";

  return async Dispatch => {
    try {
      let response;
      if (category === "latest") {
        response = await fetch(
          `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=${language}`
        );
      } else {
        response = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=${language}&page=${page}`
        );
      }
      const resData = await response.json();

      if (!response.ok) {
        throw new Error("Some thing is going wrong.");
      }

      Dispatch({
        type: "recive_movie_data",
        data: resData.results,
        CategoryType:category
        
      });
    } catch (error) {
      throw error;
    }
  };
};
