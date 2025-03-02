import React from "react";
import { useState } from "react";
import axios from "axios";

function UrlAnalytics() {
  const [url, setUrl] = useState("");
  const [totalClicks, setTotalClicks] = useState([]);

  function handleInput(e) {
    setUrl(e.target.value);
  }

  function handleSubmit() {
    axios
      .get("http://localhost:8001/url/analytics/" + url)
      .then((res) => {
        setTotalClicks(res.data.totalClicks)
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error");
      });
  }

  return (
    <div>
      <input
        placeholder="Enter URL"
        type="text"
        className="justify-items-center	"
        onChange={handleInput}
      />
      <button onClick={handleSubmit}>Submit</button>

      <div>{totalClicks}</div>
    </div>
  );
}

export default UrlAnalytics;
