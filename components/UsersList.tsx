"use client"
import { useState } from "react";
import { User, UserListProps } from "@/types";

const UsersList = ({ users }: UserListProps) => {
  const [filteredUser, setFilteredUsers] = useState<User[]>([]);

  const filterUsers = (searchString: string) => {
    const filtered = users.filter((user: User) =>
      user.name.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="w-full h-1">
      <input type="text" onChange={(e) => filterUsers(e.target.value)} style={{
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '8px',
    }}/>
      <div className="">
        <ul>
          {filteredUser.map((user: User) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersList;
