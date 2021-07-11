import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "pittsburgh",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Oh dang, it broke. Please continue to love me");
    }
  };

  //bad code: call search API when component is first rendered
  //searchApi("pasta");
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, restaurants, errorMessage];
};
