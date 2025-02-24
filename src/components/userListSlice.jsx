import React from "react";
import { useGetUsersQuery } from "../features/api/apiSlice";

const UserListSlice = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      <h1>Users:</h1>
      {users.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserListSlice;
