import React, { useEffect } from 'react'
import { useState } from 'react'


function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    
    async function fetchData(){
      const res = await fetch(url);
      const result = await res.json();
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return {
    data, loading
  };
}

export default useFetch