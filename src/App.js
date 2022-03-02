import React from 'react';
import { Header } from './Components/Header';
import { Card } from './Components/Card';
import './App.css';
import data from './data'

function App() {
  const cards = data.map(el => {
    return <Card
      key={el.id}
      {...el}
    />
  })
  return (
    <div>
      <Header />
      {cards}

    </div>
  );
}

export default App;
