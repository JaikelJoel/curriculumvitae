import { useState, useEffect } from 'react';
const api = 'https://us-central1-jaikel-dev-api.cloudfunctions.net/api';
//const api = 'https://us-centrall-gndx.cloudfunctions.net/me';

const useGetData = () => {
  const [mydata, setData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  return mydata;
}

export default useGetData;
