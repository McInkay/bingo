import React, {useState} from 'react';
import './App.css';
import {regions, REGIONS} from './regions';

const getData = async (regionKey) => {
  const prices = [];
  const region = regions[regionKey];
  const regionFetch = (num) => region.fetch(num, region.getURL, region.method, region.getBody);

  return regionFetch(0).then((data) => {
      const promises = [];
      let i = 0;
      while(i * 24 < region.getNumHits(data)) {
          promises.push(regionFetch(i));
          i++;
      }
      return Promise.all(promises);
  }).then(results => {
      return results.reduce((arr, val) => arr.concat(region.reduce(val)), []);
  }).then((data) => data.forEach(doc => {
      prices.push(region.map(doc));
  })).then(() => prices);

}

function App() {
  const [prices, setPrices] = useState([])
  const [region, setRegion] = useState(REGIONS.EU);
  const changeRegion = (newRegion) => {
    setRegion(newRegion);
    setPrices([]);
  }
  getData(region).then((newPrices) => newPrices.length !== prices.length && setPrices(newPrices));
  return (
    <div className="App">
      <header className="App-header">
        Switch sales
      </header>
      <select value={region} onChange={(event) => changeRegion(event.target.value)}>
        {Object.entries(REGIONS).map(([key, value]) => (<option value={value} key={key}>{value}</option>))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Sale Price</th>
            <th>Normal Price</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {prices.length > 0 ? prices.map((entry) => (<tr key={entry.title}>
            <td>{entry.title}</td>
            <td>{entry.price.toFixed(2)}</td>
            <td>{entry.original.toFixed(2)}</td>
            <td>{Math.round(entry.discount)}%</td>
          </tr>)) : "Loading"}
        </tbody>
      </table>
    </div>
  );
}

export default App;
