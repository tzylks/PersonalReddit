import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RedditCard from './components/RedditCard'
import Loader from './components/Loader';
import InfiniteScroll from 'react-infinite-scroller';
import Dialog from '@mui/material/Dialog'

function App() {

  const [count, setCount] = useState(0);
  const [metaData, setMeta] = useState([])
  const [afterData, setAfterData] = useState([])
  const [after, setAfter] = useState('');

  const [combined, setCombined] = useState([])

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);


  useEffect(() => {
    fetch(`https://www.reddit.com/r/all.json?after=${after}`)
      .then(res => res.json())
      .then(data => {
        setAfterData(data.data)
        setMeta(metaData.concat(data.data.children))
        setCombined(metaData.concat(data.data.children))
      })
  }, [after])

  function nextAfter() {
    setAfter(afterData.after)
  }

  const RedditCards = lazy(() => import('./components/RedditCard')); // Lazy-loaded


  return (
    <>
        <InfiniteScroll
          pageStart={0}
          loadMore={nextAfter}
          hasMore={true}
          loader={<Dialog open={false} onClose={false} className="loader" key={0}>Loading ...</Dialog>}
        >
          <RedditCard metaData={metaData} nextAfter={nextAfter} />
        </InfiniteScroll>
    </>

  );
}

export default App;
