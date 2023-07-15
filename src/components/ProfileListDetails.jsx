
import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileListDetails = ({ user }) => {
  const navigate =useNavigate()
const {avatarUrl,name,bio,followers,following,repositories,login} =user;
  return (
    <div className="flex flex-col items-center">
  <img className="mt-4 w-24 h-24 rounded-full" src={avatarUrl} alt={login} />
  <h2 className="text-2xl font-bold mt-2">Name: {name}</h2>
  <p className="text-gray-700">Bio: {bio}</p>
  <p className="mt-4">Followers: {followers.totalCount}</p>
  <p>Following: {following.totalCount}</p>
  <h3 className="text-lg font-semibold mt-4">Repositories:</h3>
  <ul className="list-disc ml-6 mt-2">
    {repositories.nodes.map((repo) => (
      <li key={repo.name}>
        <p
          onClick={() => navigate(`ProfileListDetails/${login}/${repo?.name}`)}
          className="text-blue-500 cursor-pointer"
        >
          {repo.url}
        </p>
      </li>
    ))}
  </ul>
</div>

  );
};

export default ProfileListDetails;
