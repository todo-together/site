import React, { useState } from 'react';
import './App.css';

import AppNav from './components/AppNav';
import ListBody from './components/ListBody';

import { demoData } from './demoData';


export default function App() {
  const [userData, setUserData] = useState(demoData);
  const addList = () => undefined;

  return (
    <div className="App">
      <AppNav />
      <ListBody userData={userData} setUserData={setUserData}/>
    </div>
  );
}
