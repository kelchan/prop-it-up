import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName = { 'Jane' } lastName = { 'Doe' } Age = { 45 } HairColor = { 'Brown' }/>
      <PersonCard firstName = { 'John' } lastName = { 'Smith' } Age = { 88 } HairColor = { 'Black' }/>
      <PersonCard firstName = { 'Millard' } lastName = { 'Fillmore' } Age = { 40 } HairColor = { 'Brown' }/>
      <PersonCard firstName = { 'Maria' } lastName = { 'Smith' } Age = { 62 } HairColor = { 'Blonde' }/>
    </div>
  );
}

export default App;
