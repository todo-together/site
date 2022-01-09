import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import AppNav from './components/AppNav';
import ListBody from './components/ListBody';

import { demoData } from './demoData';


export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNav />
        {/* <div style={{ height: "20px", }}/> */}
        <ListBody userData={demoData}/>
      </div>
    </Provider>
  );
}
