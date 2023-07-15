import React, { useState } from "react";
import { GET_USER_PROFILE } from "./schema";
import { useLazyQuery } from "@apollo/client";
import Loader from "./Loader";
import ProfileListDetails from "./ProfileListDetails";
const GitHubProfile = () => {
  const [username, setUsername] = useState("");
  const [getUserProfile, { loading, error, data }] =
    useLazyQuery(GET_USER_PROFILE);
  const handleSearch = () => {
    if(!username){
      alert("enter an userName")
    }
    getUserProfile({variables:{username}})
  };

  return (
    <>
      <div className="container mx-auto sticky top-0  bg-white h-[300px]  py-5">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 ">
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
         <hr />
          <div className="">
          {error && <p className="text-center font-semibold text-xl">Error while fetching details.</p>}
          {loading ? <Loader /> : null}
          {!loading && data?.user ? <ProfileListDetails user={data?.user}/> : null}
          </div>
    </>
  );
};

export default GitHubProfile;
