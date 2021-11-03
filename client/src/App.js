import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RedditCard from './components/RedditCard'

function App() {
  const [count, setCount] = useState(0);
  const [metaData, setMeta] = useState([])

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  let after = ''

  useEffect(() => {
    fetch("https://www.reddit.com/r/prequelmemes.json")
      .then(res => res.json())
      .then(data => {
        setMeta(data.data.children)
      })
  }, [])

  return (
    <>
      <RedditCard metaData={metaData} />
    </>

  );
}

export default App;
