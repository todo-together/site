import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";


interface ListInfo {
  title: string;
  owner: {
    firstName: string;
    lastName: string;
  };
}

// Sidebar with list of user's lists
export default function ListOfLists({
  lists = [],
  selected = 0,
  onSelect = (i => undefined),
}: {
  lists: ListInfo[];
  selected: number;
  onSelect: (listIdx: number) => void;
}) {
  return (
    <div>
      <Typography variant="h4">My Lists</Typography>
      <Divider />
      <List>
        {
          lists.map((list, i) => (
            <ListItemButton
              key={i}
              selected={selected === i}
              onClick={() => {
                onSelect(i);
              }}
            >
              <ListItemText 
                primary={list.title} 
                secondary={list.owner.firstName + " " + list.owner.lastName}
              />
            </ListItemButton>
          ))
        }
      </List>
    </div>
  );
}
