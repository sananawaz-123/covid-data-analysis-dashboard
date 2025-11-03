
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChartView from './components/ChartView';
import RegionFilter from './components/RegionFilter';

function App() {
  const [country, setCountry] = useState('India');
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`/api/covid/${country}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [country]);

  return (
    <div className="container py-4">
      <h2 className="mb-3">COVID-19 Data Dashboard</h2>
      <RegionFilter setCountry={setCountry} />
      {data ? <ChartView data={data} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
