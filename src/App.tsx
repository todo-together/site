import React from 'react';
import './App.css';

import AppNav from './components/AppNav';
import ListBody from './components/ListBody';

import { demoData } from './demoData';


export default function App() {
  // console.log(demoData);

  return (
    <div className="App">
      <AppNav />
      {/* <div style={{ height: "20px", }}/> */}

      <ListBody lists={demoData.lists}/>
    </div>
  );
}
