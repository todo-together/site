import React, { useState } from 'react';

import Grid from '@mui/material/Grid';

import TodoList from './TodoList';
import ListOfLists from './ListOfLists';
import ListInfo from './ListInfo';

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
export default function ListBody({userData}: {userData: UserData}) {
  const [selectedList, setSelectedList] = useState(0);
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={2.5}>
          <div>
            <ListOfLists 
              lists={[aList]}
              selected={0}
              onSelect={(i) => undefined}
            // lists={userData.lists.map(l => ({
            //     title: l.title,
            //     owner: {
            //       firstName: l.owner.firstName,
            //       lastName: l.owner.lastName,
            //     }
            //   }))}
              // selected={selectedList}
              // onSelect={setSelectedList}
            />
          </div>
        </Grid>
        <Grid item xs>
          <div>
            <TodoList 
              // list={userData.lists[selectedList]}
              list={aList}
            />
          </div>
        </Grid>
        <Grid item xs={2.5}>
          <div>
            {/* <ListInfo 
              users={[
                userData.lists[selectedList].owner,
                ...userData.lists[selectedList].editors,
              ].map(u => ({
                firstName: u.firstName,
                lastName: u.lastName,
                isMe: u.id === userData.id,
                isOwner: u.id === userData.lists[selectedList].owner.id,
              }))}
            /> */}
            <ListInfo 
              users={[
                aList.owner,
                ...aList.editors,
              ].map(u => ({
                firstName: u.firstName,
                lastName: u.lastName,
                isMe: u.id === userData.id,
                isOwner: u.id === aList.owner.id,
              }))}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
