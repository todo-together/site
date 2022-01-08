import React from 'react';
import './App.css';

import Paper from '@mui/material/Paper';

import AppNav from './components/AppNav';
import Body from './components/Body';


export default function App() {
  return (
    <div className="App">
      <AppNav />
      {/* <div style={{ height: "20px", }}/> */}
      <Body />
    </div>
  );
}
