import { useState, useEffect } from "react";
import axios from "axios";
import { SEARCH_API_KEY } from '@env';

const searchApiKey = SEARCH_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': searchApiKey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch(error) {
      setError(error);
      alert('There is an error, please reload the page.')
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const refetch = () => {
    setIsLoading(true);
    fetchData()
  }

  return { data, isLoading, error, refetch };

}
