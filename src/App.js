import './App.css';
import Searchbar from './components/Searchbar.js';
import React, { useCallback, useEffect, useState } from 'react';



function App() {

  const [background, setBackground] = useState('');

  const generateRandomGradient = useCallback( () => {
    const colors = [
      getRandomColor(),
      getRandomColor(),
      getRandomColor(),
      getRandomColor(),
    ];
    const gradientDirection = `${getRandomDirection()}deg`;

    return `linear-gradient(${gradientDirection}, ${colors.join(', ')})`;
  }, []);
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const getRandomDirection = () => {
    const directions = ['0', '45', '90', '135', '180', '225', '270', '315'];
    return directions[Math.floor(Math.random() * directions.length)];
  };
  useEffect(() => {
    const randomGradient = generateRandomGradient();
    setBackground(randomGradient);
  }, [generateRandomGradient]);

  return (
    <div className="App"
      style={{ background }}
    >
      <Searchbar></Searchbar>
    </div>
  );
}

export default App;
