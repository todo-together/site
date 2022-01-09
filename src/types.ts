export type UserID = string;
export type ListID = string;
export type ListItemID = string;

export interface UserData {
    id: UserID;
    email?: string;
    firstName: string;
    lastName: string;
    friends: UserDataShort[];
    lists: ListData[];
    friendLists: ListData[];
}

export interface UserDataShort {
    id: UserID;
    firstName: string;
    lastName: string;
}

export interface ListData {
    id: ListID;
    title: string;
    owner: UserDataShort;
    description?: string;
    createdAt?: string;
    lastUpdated?: string;
    editors: UserDataShort[];
    items: ListItemData[];
}

export interface ListItemData {
    // id: ListItemID;
    text: string;
    notes?: string;
    createdBy: UserDataShort;
    createdAt?: string;
    completed?: boolean;
    completedBy?: UserDataShort;
    // completedAt?: string;
}