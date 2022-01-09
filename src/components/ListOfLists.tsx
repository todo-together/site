import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Icon from "@mui/material/Icon";

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
  onCreateList = (() => undefined),
}: {
  lists: ListInfo[];
  selected: number;
  onSelect: (listIdx: number) => void;
  onCreateList: () => void;
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
        <ListItemButton
          key={lists.length}
          onClick={() => {
            console.log("Opening modal...");
            onCreateList();
          }}
        >
          <ListItemIcon>
            <Icon>
              add
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Add a list"/>
        </ListItemButton>
      </List>
    </div>
  );
}
