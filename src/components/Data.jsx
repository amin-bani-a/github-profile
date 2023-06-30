import React, { useEffect } from "react";
import axios from "axios";

const Data = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/amin-bani-a"
        );
        const data = await response.data;
        console.log("url", data);
        console.log("followera", data.following);

        // Do something with the response data
      } catch (error) {
        console.error(error);
        // Handle the error
      }
    };
    fetchData();
  }, []);

  // console.log(data.avatar_url);
  // console.log(data.following);
  return (
    <div className="m-14 text-5xl flex flex-row justify-center items-center">
      <h1>Fetch api </h1>
      <div>Hello world</div>
    </div>
  );
};

export default Data;
