
import React from 'react';

function RegionFilter({ setCountry }) {
  const countries = ['India', 'USA', 'Brazil', 'UK', 'Japan'];

  return (
    <div className="mb-3">
      <label className="me-2">Select Country:</label>
      <select onChange={(e) => setCountry(e.target.value)} className="form-select w-auto d-inline-block">
        {countries.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
    </div>
  );
}

export default RegionFilter;
