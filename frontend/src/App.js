/* import logo from './logo.svg'; */
import './App.css';
/* import React from 'react'; */
import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/sample/")
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return <h1>{message}</h1>;
}

export default App;