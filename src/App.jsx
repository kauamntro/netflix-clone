import React from 'react';
import Banner from './Components/Banner';
import Row from './Components/Row';
import Nav from './Components/Nav';
import categories from './api';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      {categories.map((category, index) => (
        <Row
          key={index}
          title={category.title}
          path={category.path}
          isLarge={category.isLarge}
        />
      ))}
    </div>
  );
}

export default App;
