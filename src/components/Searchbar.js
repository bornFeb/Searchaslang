import React, {useState} from 'react';
import './Searchbar.css';
import MyProfile from './MyProfile';
import Results from './Results.js';

export default function Searchbar(){
  

 

  const[text,setText] = useState('');

  const onChangeHandler = (event) =>{
    // console.log(obj);
    setText(event.target.value);
    //search from database function will reside here
  } 
  return(
             <> <MyProfile></MyProfile>
    <div className='searchBar'>

      <input className='searchBox'  placeholder="Search a slang" onChange={onChangeHandler}  value={text} />
      <ul className="list-group" style={{maxHeight: 400, overflow: 'auto'}}>  
                  <li style={{backgroundColor: "white", textAlign: "left", paddingLeft: "8px", borderRadius:"10px"}} >
                    <Results ans={text}/>
                  </li>
                </ul>
    </div>
    </>
  );
}
