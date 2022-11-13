import React,{useEffect, useState} from 'react';
import './Searchbar.css';


export default function Searchbar(){
  

//   const slangs = [
   
//   ]


  const[text,setText] = useState('');
  const [filteredList, setFilteredList] = useState(slangs);

  const onChangeHandler = (event) =>{
    // console.log(obj);
    setText(event.target.value);
    //search from database function will reside here
  } 
  return(
    <div className='searchBar'>
      <input className='searchBox'  placeholder="Search a slang" onChange={onChangeHandler}  value={text} />
      <ul className="list-group">
        {filteredList.map((words,index)=>(
            <li className="list-group-item"  id="searchList"  aria-current="true" key={index}onClick={async()=>{
              await navigator.clipboard.writeText(words.meaning)
              alert('Text copied!');
            }} >{words.word+" - " +words.meaning}
            {/* <button className='cpyBtn' key={index} ></button> */}
            </li>
        ))}   
        
      </ul>
    </div>
  );
}
