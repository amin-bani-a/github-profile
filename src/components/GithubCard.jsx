import React from "react";

const GithubCard = ({ data }) => {
  const monthJason = [
    { name: "January", number: 1 },
    { name: "February", number: 2 },
    { name: "March", number: 3 },
    { name: "April", number: 4 },
    { name: "May", number: 5 },
    { name: "June", number: 6 },
    { name: "July", number: 7 },
    { name: "August", number: 8 },
    { name: "September", number: 9 },
    { name: "October", number: 10 },
    { name: "November", number: 11 },
    { name: "December", number: 12 },
  ];
  console.log("monthJason[0].name", monthJason[0].name);
  const image = data.avatar_url;
  const dateString = data.created_at;
  const dateObj = new Date(dateString);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // Adding 1 because getMonth() returns values from 0 to 11
  const day = dateObj.getDate();

  console.log("Year:", year);
  console.log("Month:", month);
  console.log("Day:", day);

  return (
    <div className="bg-gray-400 text-6xl m-16 w-10/12 mx-auto min-h-[130rem] relative flex flex-row justify-between rounded-[8rem]">
      <div>
        <a
          href={`${data.html_url}`}
          // target="_blank"
          className="cursor-pointer"
        >
          <img
            className="blur-sm hover:blur-0 cursor-pointer rounded-full absolute bg-yellow-500 w-[50rem] h-[50rem top-[10rem] left-[10rem]"
            src={image}
            alt="new"
          />
        </a>
      </div>
      <div className="bg-gray-400 min-h-[14rem] w-[60%] flex flex-col justify-around items-start px-20 text-gray-800 rounded-[8rem]">
        <div> {data.name}</div>
        <div>Created at: {data.created_at}</div>
        <div>Last update at: {data.updated_at}</div>
        <div>
          Location:
          <a
            href={`https://en.wikipedia.org/wiki/${data.location}`}
            rel="opener"
            // target="_blank"
            className="cursor-pointer"
          >
            {data.location}
          </a>
        </div>
        <div>Followers: {data.followers}</div>
        <div>Followings: {data.following}</div>
        <div>
          <a
            href={`${data.html_url}`}
            // target="_blank"
            className="cursor-pointer underline-offset-8"
          >
            Github's URL
          </a>
        </div>
        <div>
          <a
            href={`https://github.com/${data.login}?tab=repositories`}
            // target="_blank"
            className="cursor-pointer underline-offset-1"
          >
            Repositories
          </a>
        </div>
        <div>Twitter: {data.twitter_username}</div>
        <div></div>
      </div>
    </div>
  );
};

export default GithubCard;
