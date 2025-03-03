import React from "react";
import { useState } from "react";
import axios from "axios";

function UrlAnalytics() {
  const [url, setUrl] = useState("");
  const [totalClicks, setTotalClicks] = useState("");

  function handleInput(e) {
    setUrl(e.target.value);
    
  }

  function handleSubmit() {
    let shorturl = url.substring(url.length-9);
    console.log(shorturl);
    axios
      .get("http://localhost:8001/url/analytics/" + shorturl)
      .then((res) => {
        setTotalClicks(res.data.totalClicks);
        console.log(res.data);
      })
      .catch((err) => {
        setTotalClicks("Error URL not found");
      });
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5 m-3">
      <div className="flex gap-3.5">
        <input
          placeholder="Enter Short URL"
          type="text"
          className=" border-2 border-black-500 px-2 py-2 rounded w-96"
          onChange={handleInput}
        />
        <button
          className="border-2 border-black-600 text-blue-500 px-5 py-2 rounded w-32"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className="text-3xl text-lime-500">{totalClicks}</div>
    </div>
  );
}

export default UrlAnalytics;
