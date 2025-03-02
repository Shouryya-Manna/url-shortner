import React, { useState } from "react";
import axios from "axios";

function UrlGenerator() {
  const [input, setInput] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    axios
      .post("http://localhost:8001/url", { url: input })
      .then((res) => {
        setShortUrl("http://localhost:8001/url/" + res.data.id);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error!");
      });
  }

  return (
    <div className="justify-items-center">
      <h1 className="text-xl">Url Shortner</h1>

      <input
        type="url"
        placeholder="Enter your url"
        className="justify-items-center border-2 border-blue-500 p-2 rounded"
        onChange={handleChange}
      />

      <button
        type="button"
        className="justify-items-center border-2 border-blue-500 text-blue-500 px-4 py-2 rounded"
        onClick={handleClick}
      >
        Click
      </button>

      <div>{shortUrl}</div>
    </div>
  );
}

export default UrlGenerator;
