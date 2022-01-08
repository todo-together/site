import React from "react";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';

import { getColor } from '../colors'; // Move this up to list body?

const listData = [
  {
    firstName: "Austin",
    lastName: "Poor",
    isMe: true,
    isOwner: true,
  },
  {
    firstName: "John",
    lastName: "Doe",
    isMe: false,
    isOwner: false,
  },
  {
    firstName: "Big",
    lastName: "Foot",
    isMe: false,
    isOwner: false,
  },
  {
    firstName: "Sandwich",
    lastName: "The Dog",
    isMe: false,
    isOwner: false,
  },
];

export default function ListInfo() {
  return (
    <div>
      <Typography variant="h4">
        ListInfo
      </Typography>
      <Divider />
      
      <List>
        {listData.map((d, i) => (
          <ListItem key={i}>
            <div 
              style={{
                marginRight: "10px",
                width: "25px",
                height: "25px",
                borderRadius: "12px",
                backgroundColor: getColor(i),
              }}
            />
            <ListItemText primary={`${d.firstName} ${d.lastName}`} />
            <div>
              {
                d.isMe && <Chip label="Me" variant="outlined" style={{marginLeft: "5px"}}/>
              }
              {
                d.isOwner && <Chip label="Owner" variant="outlined" style={{marginLeft: "5px"}}/>
              }
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
}