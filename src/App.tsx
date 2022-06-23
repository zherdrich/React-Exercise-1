import React from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from './switch';
import PetInfo from './PetInfo';
import UpDownCounter from './UpDownCounter';
import Diameter from './diameter';
import ArraysEx from './ArraysEx';
import Form from './Form';
import Feedback from './Feedback';


function App() {
  return (
    <div className="App">
      <Switch/>
      <Switch/>
      <PetInfo/>
      <UpDownCounter/>
      <UpDownCounter/>
      <UpDownCounter/>
      <Diameter/>
      <ArraysEx/>
      <Form/>
      <Feedback/>
    </div>
  );
}

export default App;
