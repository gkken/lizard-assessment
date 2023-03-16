import { useState, useEffect } from 'react';

export const useFetchData = (endpoint: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ac = new AbortController();
    fetch(endpoint, {
      signal: ac.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.posts);
      })
      .catch((error) => {
        if (error.name === 'AbortError') return;
        throw error;
      });

    return () => ac.abort();
  }, [setData]);

  return { data };
};
