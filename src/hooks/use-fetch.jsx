import React, { useEffect, useState } from 'react';

export default function useFetch(section) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`http://localhost:5000/${section}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => setError('에러'))
      .finally(() => setLoading(false));
  }, []);

  return [data, error, loading];
}
