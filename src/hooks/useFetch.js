// hooks/useFetch.js

import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(null);
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setIsError(error.message);
      }
      setIsLoading(false);
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
