
import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_USER_PROFILE } from "./schema";


const GitHubProfile = () => {
  const [username, setUsername] = useState("");
  const [getUserProfile, { loading, error, data }] = useLazyQuery(GET_USER_PROFILE);

  const handleSearch = () => {
    getUserProfile({ variables: { username } });
  };

  if (loading) return <p>Loading...</p>;  
  if (error) return <p>Error :(</p>;

  if (data && data.user) {
    const { avatarUrl, name, login, bio, repositories, followers, following } = data.user;

    return (
      <div className="container mx-auto py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-black text-center py-2">GitHub Profile Viewers</h1>

          <input
            className="w-full mb-4 px-4 py-2 rounded border border-gray-300"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
          <img className="mt-4 w-[100px] h-[100px]" src={avatarUrl} alt={login} />
          <h2 className="text-2xl font-bold mt-2">Name: {name}</h2>
          <p className="text-gray-700">Bio: {bio}</p>
          <p className="mt-4">Followers: {followers.totalCount}</p>
          <p>Following: {following.totalCount}</p>
          <h3 className="text-lg font-semibold mt-4">Repositories:</h3>
          <ul className="list-disc ml-6 mt-2">
            {repositories.nodes.map((repo) => (
              <li key={repo.name}>
                <a className="text-blue-500" href={repo.url}>
                  {repo.url}
                </a>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-14">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-black text-center py-4">GitHub Profile Viewer</h1>
        <input
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default GitHubProfile;

