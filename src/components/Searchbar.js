import React,{useEffect, useState} from 'react';
import './Searchbar.css';
import MyProfile from './MyProfile';
import Results from './Results.js';

export default function Searchbar(){
  

  // const slangs = [
  //   {
  //     word: "abdabs",
  //     meaning: "Noun. Terror, the frights, nerves. Often heard as the screaming abdabs. Also very occasionally 'habdabs'. [1940s]"
  //   },
  //   {
  //     word: "ablute",
  //     meaning: "nai janvu"
  //   },
  //   {
  //     word: "absobloodylutely",
  //     meaning: "nai khabar"
  //   },
  //   {
  //     word: "shiva",
  //     meaning: "angery lord/aghori"
  //   },
  //   {
  //     word: "vishnu",
  //     meaning: "chill lord"
  //   },
  //   {
  //     word: "bhrmha",
  //     meaning: "big lord"
  //   }
  // ]


  const[text,setText] = useState('');
  // const [filteredList, setFilteredList] = useState(slangs);

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
                    <Results></Results>
                  </li>
                </ul>
    </div>
    </>
  );
}
