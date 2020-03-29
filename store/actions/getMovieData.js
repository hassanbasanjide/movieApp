import { API_KEY } from "../../utils/constants";

export default (category) => {
  const page = "1";
  const language = "en-US";
  return async (Dispatch) => {
    try {
      let response;
      let Result;
      if (category === "latest") {
        response = await fetch(
          `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=${language}`
        );
        const resData = await response.json();

        Result = [resData];
      } else {
        response = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=${language}&page=${page}`
        );

        const resData = await response.json();

        Result = resData.results;
      }

      if (!response.ok) {
        throw new Error("Some thing is going wrong.");
      }

      Dispatch({
        type: "recive_movie_data",

        data: Result,

        CategoryType: category,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
