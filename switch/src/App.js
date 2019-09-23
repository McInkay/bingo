import React, {useState} from 'react';
import './App.css';
import fetchJsonp from 'fetch-jsonp';
const PRICE = {};
PRICE[250] = "price_lowest_f%3A%220%22%20OR%20price_lowest_f%3A%5B0.01%20TO%202.49%5D";
PRICE[500] = PRICE[250] + "%20OR%20price_lowest_f%3A%5B2.5%20TO%204.99%5D";

const getData = async () => {

  const url = (num) => `https://searching.nintendo-europe.com/en/select?q=*&fq=type%3AGAME%20AND%20((price_has_discount_b%3A"true")%20AND%20(${PRICE[500]}))%20AND%20sorting_title%3A*%20AND%20*%3A*&sort=price_sorting_f%20asc&start=${num*24}&rows=24&wt=json&bf=linear(ms(priority%2CNOW%2FHOUR)%2C1.1e-11%2C0)&json.wrf=callback${num}`;

  const promise = (num) => fetchJsonp(url(num), {
    jsonpCallback: 'callback' + num,
    jsonpCallbackFunction: 'callback' + num
  }).then((response) => response.json());

  const prices = [];

  return promise(0).then((data) => {
      const promises = [];
      let i = 0;
      while(i * 24 < data.response.numFound) {
          promises.push(promise(i));
          i++;
      }
      return Promise.all(promises);
  }).then(results => {
      return results.reduce((arr, val) => arr.concat(val.response.docs), []);
  }).then((data) => data.forEach(doc => {
      prices.push({title: doc.title, price: doc.price_sorting_f, original: Math.round((doc.price_sorting_f / (100 - doc.price_discount_percentage_f) * 100)*100)/100, discount: doc.price_discount_percentage_f});
  })).then(() => prices);

}
function App() {
  const [prices, setPrices] = useState([])
  getData().then((newPrices) => newPrices.length !== prices.length && setPrices(newPrices));
  console.table(prices)
  return (
    <div className="App">
      <header className="App-header">
        Switch sales
      </header>
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
          {prices.map((entry) => (<tr key={entry.title}>
            <td>{entry.title}</td>
            <td>{entry.price}</td>
            <td>{entry.original}</td>
            <td>{entry.discount}%</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
