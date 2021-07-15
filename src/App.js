//import React and {useState}
import React, {useEffect, useState} from "react";
import "./App.css";

//import axios
import axios from 'axios';

//import components
import Post from './Post';

function App() {

  const [data, setData] = useState('');
  useEffect(() =>{
    axios.get('https://api.nasa.gov/planetary/apod?date=2021-07-12&api_key=DEMO_KEY')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => console.log(err));
    }, [])

  return (
    <div className="App">
        <Post post={data} />
    </div>
  );
}

export default App;
