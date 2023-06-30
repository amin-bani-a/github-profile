import React from "react";

const GithubCard = ({ data }) => {
  console.log("GithubCard tanazzz", data);

  const image = data.avatar_url;
  console.log("image", image);
  return (
    <div className="bg-gray-400 text-6xl m-16 w-10/12 mx-auto min-h-[130rem] rounded-full relative flex flex-row justify-between">
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
      <div className="bg-gray-400 min-h-[14rem] w-[60%] flex flex-col justify-around items-start px-20 text-gray-800">
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
            className="cursor-pointer"
          >
            Github's URL
          </a>
        </div>
        <div>
          <a
            href={`https://github.com/${data.login}?tab=repositories`}
            // target="_blank"
            className="cursor-pointer"
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
