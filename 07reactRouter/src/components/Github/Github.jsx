import React from "react";
import { useLoaderData } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";

function Github() {
  /* const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://api.github.com/users/kushagra-kapoor25")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []); */

  const data = useLoaderData();
  return (
    <div className="text-center  m-4 bg-gray-600 text-white p-4 text-3xl">
      <p className="pb-3">Github Followers: {data.followers}</p>
      <img
        className="mx-auto rounded-lg"
        src={data.avatar_url}
        alt="Git Profile Photo"
        width={200}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/kushagra-kapoor25"
  );
  return response.json();
};
