import React from 'react';

import Grid from '@mui/material/Grid';

import TodoList from './TodoList';
import ListOfLists from './ListOfLists';
import ListInfo from './ListInfo';

// Contains everything below the AppNav.
export default function Body() {
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div style={{ 
            // border: "1px solid black" 
          }}>
            <ListOfLists />
          </div>
        </Grid>
        <Grid item xs>
          <div style={{ 
            // border: "1px solid black" 
          }}>
            <TodoList />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ 
            // border: "1px solid black" 
          }}>
            <ListInfo />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
