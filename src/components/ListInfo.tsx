import React from "react";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";

import { getColor } from "../colors"; // Move this up to list body?
import UserIcon from "./UserIcon";

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

interface UserData {
  firstName: string;
  lastName: string;
  isMe?: boolean;
  isOwner?: boolean;
}

export default function ListInfo({ users = [] }: { users: UserData[] }) {
  return (
    <div>
      <Typography variant="h4">Editors</Typography>
      <Divider />

      <List>
        {users.map((d, i) => (
          <ListItem key={i}>
            <UserIcon
              size={"30px"}
              fill={getColor(i)}
              text={`${d.firstName[0]}${d.lastName[0]}`.toUpperCase()}
              tooltip={`${d.firstName} ${d.lastName}`}
            />
            <ListItemText 
              primary={`${d.firstName} ${d.lastName}`} 
              secondary={<>
                {d.isMe && (
                  <Chip
                    component="span"
                    label="Me"
                    variant="outlined"
                    style={{ marginLeft: "5px", marginBottom: "5px" }}
                  />
                )}
                {d.isOwner && (
                  <Chip
                    component="span"
                    label="Owner"
                    variant="outlined"
                    style={{ marginLeft: "5px" }}
                  />
                )}
              </>}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
