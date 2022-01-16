import React, { useState, useEffect } from 'react';
import { reject } from 'q';

const useFetch = (url, queryParamObj) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const objToQueryString = obj => {
      const keyValuePairs = [];
      for (const key in obj) {
        keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }
      return keyValuePairs.join('&');
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}?${queryString}`);
        const json = await response.json();
        setData(json);
        reject();
      } catch(err) {
        setHasError(true);
      }
      setLoading(false);
    };

    const queryString = objToQueryString(queryParamObj);

    fetchData();
  }, [url, queryParamObj])

  return { data, loading, hasError }
}

export default useFetch;
