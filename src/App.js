import { useState } from "react";
import "./App.css";

function getCat() {
  return fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => data[0].url);
}

export default function App() {
  const [catURL, setCatURL] = useState(
    "https://cdn2.thecatapi.com/images/MTYwMDEwNg.jpg"
  );

  function setCat() {
    getCat().then((url) => setCatURL(url));
  }

  return (
    <div className='App'>
      <button onClick={() => setCat()}>New Cat!</button>
      <br />
      <img src={catURL} alt='cat' />
    </div>
  );
}
