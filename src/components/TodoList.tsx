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
import Tooltip from '@mui/material/Tooltip';

import UserIcon from './UserIcon';

import { ListData } from '../types';


// Inner todo list component
export default function TodoList({ list }: { list: ListData }) {
  return (
    <div>
      <Typography variant="h4">
        {list.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        created by {list.owner.firstName} {list.owner.lastName}
      </Typography>
      <Typography variant="body1">
        {list.description}
      </Typography>

      <div style={{ height: "25px" }} />

      <ButtonGroup variant="outlined" size="small">
        <Button>
          Edit List
        </Button>
        <Button>
          Delete List
        </Button>
        <Button>
          Refresh List (tmp)
        </Button>
      </ButtonGroup>

      <div style={{ height: "25px" }} />

      <Divider style={{ marginTop: "20px", }} />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Completed By</TableCell>
              <TableCell>To-Do Item</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.items.map((item, i) => (
              <TableRow key={item.text}>
                <TableCell>
                  <Tooltip title={item.completed ? "Mark as completed" : "Mark as incomplete"}>
                    <IconButton>
                      <Icon style={{
                        color: item.completed ? "green" : "#f0f0f0",
                      }}>
                        {
                          item.completed ? "check_circle" : "circle"
                        }
                      </Icon>
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  {item.text}
                </TableCell>
                <TableCell>
                  <UserIcon
                    text={
                      `${item.createdBy.firstName[0]}${item.createdBy.lastName[0]}`
                    }
                    fill="#aaaaaa"
                  />
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
                    <IconButton
                      disabled={i === 0}
                    >
                      <Tooltip title="Move Item Up">
                        <Icon
                          color={i === 0 ? "disabled" : "info"}
                        >
                          keyboard_arrow_up
                        </Icon>
                      </Tooltip>
                    </IconButton>
                    <IconButton
                      disabled={i === list.items.length - 1}
                    >
                      <Tooltip title="Move Item Down">
                        <Icon
                          color={i === list.items.length - 1 ? "disabled" : "info"}
                        >
                          keyboard_arrow_down
                        </Icon>
                      </Tooltip>
                    </IconButton>
                    <IconButton disabled> {/* temporarily disabled */}
                      <Tooltip title="Item Info">
                        <Icon color="secondary">
                          info_outline
                        </Icon>
                      </Tooltip>
                    </IconButton>
                    <IconButton>
                      <Tooltip title="Delete Item">
                        <Icon color="error">
                          delete_outline
                        </Icon>
                      </Tooltip>
                    </IconButton>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
            <TableRow key={list.items.length}>
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
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}