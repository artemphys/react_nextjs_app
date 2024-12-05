export interface User {
    createdAt: string;
    name: string;
    avatar: string;
    email: string;
    id: string; 
}

export interface UserListProps {
    users: User[];
}