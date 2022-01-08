import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';


const listData = {
  title: "Groceries",
  createdBy: "John Doe",
  createdAt: "2021-02-03",
  description: "Our family grocery list! This has all the important info in it. It's a long description that might even wrap to multiple lines.",
  editors: [

  ],
  items: [
    {
      id: 1,
      text: "Milk",
      notes: "2%",
      completed: false,
      completedBy: undefined,
      completedAt: undefined,
    },
    {
      id: 2,
      text: "Eggs",
      notes: undefined,
      completed: false,
      completedBy: undefined,
      completedAt: undefined,
    },
    {
      id: 3,
      text: "Bread",
      notes: "2%",
      completed: true,
      completedBy: undefined,
      completedAt: undefined,
    },
  ],
}

// Inner todo list component
export default function TodoList() {
  return (
    <div>
      <Typography variant="h4">
        { listData.title }
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        created by { listData.createdBy }
      </Typography>
      <Typography variant="body1">
        { listData.description }
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Completed By</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { listData.items.map(item => (
              <TableRow key={item.text}>
                <TableCell>
                  <IconButton>
                    <Icon style={{
                      color: item.completed ? "green" : "red",
                    }}>
                      {
                        item.completed ? "check_circle" : "circle"
                      }
                    </Icon>
                  </IconButton>
                </TableCell>
                <TableCell>
                  { item.text }
                </TableCell>
                <TableCell>
                  { item.notes }
                </TableCell>
                <TableCell>
                  { item.completed ? "Yes" : "No" }
                </TableCell>
              </TableRow>
            )) }
            <TableRow key={listData.items.length}>
              <TableCell>
                {/* <IconButton>
                  <Icon>
                    circle
                  </Icon>
                </IconButton> */}
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  Click to add an item
                </Typography>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}