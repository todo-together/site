import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const lists = [
  {
    id: 1,
    title: "List 1",
    description: "Some stuff",
    owner: "Big Foot",
    lastEdited: "2022-01-03",
  },
  {
    id: 2,
    title: "Groceries",
    description: "Groceries we need from the store",
    owner: "Austin Poor",
    lastEdited: "2021-12-23",
  },
  {
    id: 3,
    title: "List 2",
    description: "",
    owner: "John Doe",
    lastEdited: "2021-04-03",
  },
  {
    id: 4,
    title: "List 3",
    description: "Some other stuff",
    owner: "Austin Poor",
    lastEdited: "2021-02-03",
  },
];


// Sidebar with list of user's lists
export default function ListOfLists() {
  const [selectedList, setSelectedList] = useState(1);
  return (
    <div>
      <Typography variant="h4">My Lists</Typography>
      <Divider />
      <List>
        {
          lists.map((list, i) => (
            <ListItemButton
              key={i}
              selected={selectedList === i}
              onClick={() => setSelectedList(i)}
            >
              <ListItemText primary={ list.title } secondary={ list.description }/>
              <ListItemText primary={ list.owner } secondary={ list.lastEdited } style={{ textAlign: "right", }}/>
            </ListItemButton>
          ))
        }
      </List>
    </div>
  );
}