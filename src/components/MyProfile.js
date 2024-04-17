import React from 'react'
import logo from "../images/profile_pic.jfif";
import github from "../images/github.webp";
import twitter from "../images/twitter.webp";
import ln from "../images/th.webp";
import './myProfile.css';


export default function MyProfile(){
  return (
    <>
    <div className='myCard'>
      <div className='imageSection'>
        <img src={logo} className="profileImg" alt="profile_Image"/>
      </div>
      <div className='textSection'>
        <div className='cardTitle'>
          <p>made with 🤎 By Harsh</p>
        </div>
        <div className='cardImages'>
          <p>Connect with me here</p>
          <p>
            <span className='github_img' ><a href='https://github.com/harshdevl' rel="noreferrer" target="_blank"><img alt="githubImage" src={github} style={{maxWidth: 30,position:'relative',left:'auto',marginRight:'10px'}}/></a></span>
            <span className='twitter_img' ><a href='https://twitter.com/home' rel="noreferrer" target="_blank"><img alt="twitterImage" src={twitter} style={{maxWidth: 30,position:'relative',left:'auto',marginRight:'10px'}}/></a></span>            
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

  // {/* <div className='myProfile' style={{width:'420px',height:'140px'}}>
  //         <div className="card mb-3" style={{Width:'54px',objectFit:'cover',height:'140px'}}>
  //           <div className="row g-0"> */}
  //             {/* <div className="col-md-4"> */}
  //               {/* <img src={logo} className="profileImg" alt="profile_Image"/> */}
  //             {/* </div> */}
  //             {/* <div className="col-md-8">
  //               <div className="card-body">
  //                 <h5 className="card-title">made with
  //                 <span className="emoji" role="img">🤎</span>  by Harsh</h5>
  //                 <p className="card-text">Connect with me.</p>
  //                 <p>
  //                    <span className='github_img' ><a href='https://github.com/harshdevl' rel="noreferrer" target="_blank"><img alt="githubImage" src={github} style={{maxWidth: 30,position:'relative',left:'auto',marginRight:'10px'}}/></a></span>
              // <span className='Linkedin_img' ><a href='https://www.linkedin.com/in/harshbuddhdev5/' rel="noreferrer" target="_blank"><img alt="linkedinImage" src={ln} style={{maxWidth: 30,position:'relative',left:'auto',marginRight:'10px'}}/></a></span>
              // <span className='twitter_img' ><a href='https://twitter.com/home' rel="noreferrer" target="_blank"><img alt="twitterImage" src={twitter} style={{maxWidth: 30,position:'relative',left:'auto',marginRight:'10px'}}/></a></span>            </p>
         
  //                 <p className="card-text"><small style={{color: "white"}}>Last updated 3 mins ago</small></p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div> */}
