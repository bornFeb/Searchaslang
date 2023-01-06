import react, {Component} from 'react';
import data from "../csvjson.json";


class Result extends Component{
  render() {

    if(this.props.ans === ''){
      return (
        <div>
          {
            data.data.map((slang,index) => {
              return (
                <div key={index} aria-current="true" onClick={async()=>{
                  await navigator.clipboard.writeText(slang.Meaning)
                  alert('Text copied!');
                }}>
                  <h4 style={{borderBottomStyle: "groove", fontSize: "20px",paddingBottom:"8px"}} ><b>{slang.Slang}</b> - <i style={{fontFamily: "cursive"}}   >{slang.Meaning}</i></h4>
  
                </div>
              )
            })
          }
        </div>
      )
    }else{
       
        // var answers = data.data.filter((slang, index)=> 'abd' === );
        // // console.log("a",this.props.ans);
        // console.log(answers);
      
    }




    // return(
    //   <div>
    //     { 
    //       data.data.map((slang,index)=>{
    //         return (
    //           <div key={index} aria-current="true" onClick={async()=>{
    //             await navigator.clipboard.writeText(slang.Meaning)
    //             alert('Text copied!');
    //           }}>
    //             <h4 style={{borderBottomStyle: "groove", fontSize: "20px",paddingBottom:"8px"}} ><b>{slang.Slang}</b> - <i style={{fontFamily: "cursive"}}   >{slang.Meaning}</i></h4>

    //           </div>
    //         )
    //       })
    //     }
    //   </div>
    // )
  }
}

export default Result;
