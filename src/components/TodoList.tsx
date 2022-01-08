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
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';



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
  description?: string;
  owner: UserData;
  createdAt: string;
  editors: UserData[];
  items: ListItemData[];
}

// Inner todo list component
export default function TodoList({ list }: {list: ListData}) {
  return (
    <div>
      <Typography variant="h4">
        { list.title }
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        created by { list.owner.firstName } { list.owner.lastName }
      </Typography>
      <Typography variant="body1">
        { list.description }
      </Typography>

      <Divider style={{ marginTop: "20px", }}/>

      <TableContainer>
        <Table>
          {/* <TableHead>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Completed By</TableCell>
            </TableRow>
          </TableHead> */}
          <TableBody>
            { list.items.map(item => (
              <TableRow key={item.text}>
                <TableCell>
                  <IconButton>
                    <Icon style={{
                      color: item.completed ? "green" : "#f0f0f0",
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
                  <ButtonGroup
                    variant="outlined"
                    size="small"
                    style={{
                      marginLeft: "auto",
                      marginRight: "0px",
                    }}
                  >
                    <IconButton>
                      <Icon color="info">
                        info_outline
                      </Icon>
                    </IconButton>
                    <IconButton>
                      <Icon color="error">
                        delete_outline
                      </Icon>
                    </IconButton>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            )) }
            <TableRow key={listData.items.length}>
              <TableCell>
                <IconButton>
                  <Icon>
                    add_circle
                  </Icon>
                </IconButton>
              </TableCell>
              <TableCell>
                <FormControl
                  style={{
                    width: "100%",
                  }}
                >
                  <TextField 
                    variant="standard"
                    fullWidth
                    placeholder='Add an item'    
                    onChange={e => {
                      console.log(e.target.value);
                    }}
                    onBlur={e => {
                      console.log(e.target.value);
                    }} 
                    onKeyDown={e => {
                      console.log(e.key);
                    }}     
                  />
                </FormControl>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}