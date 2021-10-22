import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

const useFetchGif = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGif(category)
      .then((imgs) => setState({ data: imgs, loading: false }))
      .catch((err) => {
        console.warn(err);
      });
  }, [category]);

  return state;
};

export default useFetchGif;
