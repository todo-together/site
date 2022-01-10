import React, { useState } from 'react';

import Grid from '@mui/material/Grid';

import TodoList from './TodoList';
import ListOfLists from './ListOfLists';
import ListInfo from './ListInfo';
import NewListModal from './NewListModal';

import { UserData } from '../types';

const aList = {
  id: "l001",
  title: "My Lists",
  owner: {
    id: "u001",
    firstName: "John",
    lastName: "Doe",
  },
  editors: [],
  items: [],
};

// Contains everything below the AppNav.
export default function ListBody({userData, setUserData}: {userData: UserData, setUserData: (userData: UserData) => void}) {
  const [selectedList, setSelectedList] = useState(0);
  const [newListModalOpen, setNewListModalOpen] = useState(true);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <NewListModal 
        open={newListModalOpen}
        onClose={() => setNewListModalOpen(false)}
        onSubmit={(title, description) => {
          console.log("Creating new list:", title, description);


          // Create new list
          // ...

          setNewListModalOpen(false);
        }}
      />

      <Grid container spacing={2}>
        <Grid item xs={2.5}>
          <div>
            <ListOfLists 
              lists={userData.lists.map(l => ({
                  title: l.title,
                  owner: {
                    firstName: l.owner.firstName,
                    lastName: l.owner.lastName,
                  }
                }))}
                selected={selectedList}
                onSelect={setSelectedList}
                onCreateList={() => {
                  console.log("Creating a new list...");
                  setNewListModalOpen(true);
                }}
              />
          </div>
        </Grid>
        <Grid item xs>
          <div>
            <TodoList 
              list={userData.lists[selectedList]}
            />
          </div>
        </Grid>
        <Grid item xs={2.5}>
          <div>
            <ListInfo 
              users={[
                userData.lists[selectedList].owner,
                ...userData.lists[selectedList].editors,
              ].map(u => ({
                firstName: u.firstName,
                lastName: u.lastName,
                isMe: u.id === userData.id,
                isOwner: u.id === userData.lists[selectedList].owner.id,
              }))}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
