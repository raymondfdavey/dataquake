import axios from "axios";

export const fetchAllPoke = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=1000")
    .then(({ data: { results } }) => {
      return results;
    });
};
