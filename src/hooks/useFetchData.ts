import { useState, useEffect } from 'react';

export const useFetchData = (endpoint: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const aborController = new AbortController();
    fetch(endpoint, {
      signal: aborController.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.posts);
      })
      .catch((error) => {
        if (error.name === 'AbortError') return;
        throw error;
      });

    return () => aborController.abort();
  }, [setData, endpoint]);

  return { data };
};
