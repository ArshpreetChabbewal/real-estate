import axios from "axois";

const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "5baeb89db9msh010c33cba93a947p1f27dajsn31d43c1812c2",
    },
  });

  return data;
};
