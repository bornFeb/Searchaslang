import React, { useState } from 'react';
import './Searchbar.css';
import MyProfile from './MyProfile';
import Results from './Results.js';
import searchIcon from '../images/searchicon2.jpeg';

export default function Searchbar() {
  const [text, setText] = useState('');

  const onChangeHandler = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="searchbar-container">
      <MyProfile />
      <div className='searchBar'>
        <input
          className='searchBox'
          placeholder="Search a slang"
          onChange={onChangeHandler}
          value={text}
          style={{backgroundImage: `url(${searchIcon})`,
          backgroundPosition: 'right center', /* Place the image on the right side */
          backgroundSize: '30px 30px',
          backgroundRepeat: 'no-repeat',
          paddingRight: '30px'}}
        />
        <div className="results-container">
          <Results ans={text} />
        </div>
      </div>
    </div>
  );
}
