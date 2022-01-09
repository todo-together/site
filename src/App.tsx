import React, { useState } from 'react';
import './App.css';

import AppNav from './components/AppNav';
import ListBody from './components/ListBody';

import { demoData } from './demoData';


export default function App() {
  return (
    <div className="App">
      <AppNav />
      {/* <div style={{ height: "20px", }}/> */}
      <ListBody userData={demoData}/>
    </div>
  );
}
