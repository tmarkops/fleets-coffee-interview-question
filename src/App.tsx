import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from './components/Title/Title';
import { Description } from './components/Description/Description';
import { Problem } from './components/Problem/Problem';
export default function App() {
  return (
    <div className="App">
      <Title />
      <Description />
      <Problem />
    </div>
  );
};