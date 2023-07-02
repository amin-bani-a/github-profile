import React from "react";

const Search = ({ FetchHandler }) => {
  // const FetchHandler = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://api.github.com/users/amin-bani-a"
  //     );
  //     const data = await response.data;
  //     console.log("url", data);
  //     console.log("followera", data.following);

  //     // Do something with the response data
  //   } catch (error) {
  //     console.error(error);
  //     // Handle the error
  //   }
  // };

  return (
    <div className="bg-blue-500 text-6xl m-16 w-10/12 mx-auto relative">
      <input
        className="my-auto pl-14 pr-[100rem] py-14 text-6xl rounded-tl-[7rem] rounded-bl-[7rem] focus:outline-none focus:ring focus:ring-violet-300 drop-shadow-2xl "
        type="text"
        placeholder=" Github Username"
      />
      <button
        className="px-15 py-[4.187rem] bg-white cursor-pointer rounded-tr-[7rem] rounded-br-[7rem] border-l-gray-500 border-solid border-l-8 border-transparent drop-shadow-2xl absolut"
        onClick={FetchHandler}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
