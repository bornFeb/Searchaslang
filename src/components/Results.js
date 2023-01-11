import {Component} from 'react';
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
                  <h4 style={{borderBottomStyle: "groove", fontSize: "20px",paddingBottom:"8px"}} ><b>{slang.Slang}</b> - <i style={{fontFamily: "monospace"}}   >{slang.Meaning}</i></h4>
                </div>
              )
            })
          }
        </div>
      )
    }else{
       var res = data.data.filter((slang)=> {

        return slang.Slang.toLowerCase().includes(this.props.ans.toLowerCase());
       })
       if(res.length === 0){
        return (
          <div>
            {
              <h4 style={{borderBottomStyle: "groove", fontSize: "20px",paddingBottom:"8px"}}><b>No result Found.</b></h4>

            }
          </div>
        )
       }else{
        return (
          <div>
            {
              res.map((slang, index) => {
                return (
                    <div key={index} aria-current="true" onClick={async()=>{
                    await navigator.clipboard.writeText(slang.Meaning)
                    alert('Text copied!');
                  }}>
                    <h4 style={{borderBottomStyle: "groove", fontSize: "20px",paddingBottom:"8px"}}><b>{slang.Slang}</b> - <i style={{fontFamily: "monospace"}}   >{slang.Meaning}</i></h4>
                  </div>
                )
              })
            }
          </div>
         )
       }
       
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
