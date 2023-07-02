import React, { useState } from "react";
import GithubCard from "./GithubCard";
import Search from "./Search";
import Data from "./Data";
import axios from "axios";

const Container = () => {
  const [data, setData] = useState({});
  const FetchHandler = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/arghun-dev"
      );
      const result = await response.data;

      setData(result);
      // Do something with the response data
    } catch (error) {
      console.log("catch:");
      console.error(error);
      // Handle the error
    }
  };
  return (
    <div className="bg-yellow-400 mx-auto mt-10 w-8/12 flex flex-col justify-center items-center">
      {data && <GithubCard data={data} />}
      <Search FetchHandler={FetchHandler} />
      {/* <Data /> */}
    </div>
  );
};

export default Container;
