import React, { useState } from 'react';

import Grid from '@mui/material/Grid';

import TodoList from './TodoList';
import ListOfLists from './ListOfLists';
import ListInfo from './ListInfo';

interface UserData {
  firstName: string;
  lastName: string;
}

interface ListItemData {
  text: string;
  notes?: string;
  createdBy: UserData;
  completed?: boolean;
  completedBy?: UserData;
}

interface ListData {
  title: string;
  owner: UserData;
  createdAt: string;
  editors: UserData[];
  items: ListItemData[];
}

// Contains everything below the AppNav.
export default function ListBody({ lists }: {lists: ListData[]}) {
  const [selectedList, setSelectedList] = useState(0);
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div>
            <ListOfLists 
              lists={lists.map(l => ({
                title: l.title,
                owner: {
                  firstName: l.owner.firstName,
                  lastName: l.owner.lastName,
                }
              }))}
              selected={selectedList}
              onSelect={setSelectedList}
            />
          </div>
        </Grid>
        <Grid item xs>
          <div>
            <TodoList list={lists[selectedList]}/>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
            <ListInfo />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
