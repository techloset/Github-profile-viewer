
import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_REPOSITORY_DETAILS } from './schema';
import { useLazyQuery } from '@apollo/client';

const RepoDetails = () => {
  const { gitRepo, userName } = useParams();
  const [GetRepositoryDetails, { loading, error, data }] = useLazyQuery(GET_REPOSITORY_DETAILS);

  React.useEffect(() => {
    GetRepositoryDetails({
      variables: { owner: userName, name: gitRepo },
    });
  }, [GetRepositoryDetails, gitRepo, userName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return null;
  }

  const repository = data.repository;

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{repository.name}</h2>
        <p className="mb-2">{repository.description}</p>
        <p className="mb-2">Created at: {repository.createdAt}</p>
        <p className="mb-2">Default branch: {repository.defaultBranchRef.name}</p>
        <p className="mb-2">Stars: {repository.stargazers.totalCount}</p>
        <p className="mb-2">Watchers: {repository.watchers.totalCount}</p>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-4">Commit History</h3>
          {repository.commits?.target?.history?.nodes?.map((commit) => (
            <div key={commit.message} className="bg-white rounded p-4 mb-4">
              <p className="mb-2">Message: {commit.message}</p>
              <p className="mb-2">Committed Date: {commit.committedDate}</p>
              <p className="mb-2">Author: {commit.author.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-4">Branches</h3>
          {repository.branches?.nodes?.map((branch) => (
            <div key={branch.name} className="bg-white rounded p-4 mb-4">
              <p className="mb-2">Branch Name: {branch.name}</p>
              <p className="mb-2">Commit Count: {branch.target.history.totalCount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RepoDetails;

