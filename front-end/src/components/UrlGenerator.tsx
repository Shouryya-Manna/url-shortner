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
    <div className="items-center justify-items-center">
      <h1 className="mt-16 mb-32 text-7xl text-blue-500">URL Shortner</h1>
      <div className="m-3 gap-5 flex">
        <input
          type="url"
          placeholder="Enter your url"
          className=" border-2 border-black-500 px-2 py-2 rounded w-96"
          onChange={handleChange}
        />

        <button
          type="button"
          className="justify-items-center border-2 border-black-600 text-blue-500 px-5 py-2 rounded w-32"
          onClick={handleClick}
        >
          Click
        </button>
      </div>
      <a className="m-2 p-3  text-lime-500" href={shortUrl} target="_blank">
        {shortUrl}
      </a>
    </div>
  );
}

export default UrlGenerator;
