export type UserID = string;
export type ListID = string;
export type ListItemID = string;

export interface User {
    id: UserID;
    email: string;
    firstName: string;
    lastName: string;
    friends: UserID[];
    lists: ListID[];
    friendLists: ListID[];
}

export interface List {
    id: ListID;
    title: string;
    owner: UserID;
    // createdAt: string;
    // lastUpdated: string;
    editors: UserID[];
    items: ListItem[];
}

export interface ListItem {
    // id: ListItemID;
    text: string;
    notes?: string;
    createdBy: UserID;
    // createdAt: string;
    completed?: boolean;
    completedBy?: UserID;
    // completedAt?: string;
}