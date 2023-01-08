import React from 'react'
import logo from "../images/profile_pic.jfif";
import github from "../images/github.webp";
import twitter from "../images/twitter.webp";
import ln from "../images/th.webp";

export default function MyProfile(){
  return (
    <div className='myProfile' style={{width:'420px',height:'140px'}}>
      <div className="card mb-3" style={{Width:'54px',objectFit:'cover',height:'140px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={logo} className="img-fluid rounded-start" style={{objectFit:'fill'}} alt="profile_Image"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">made with
              <span className="emoji" role="img">🤎</span>  by Harsh</h5>
              <p className="card-text">Connect with me.</p>
              <p>
                <span className='github_img' role="image"><img src={github} style={{maxWidth: 30,position:'relative',left:'auto',marginRight:'5px'}}/></span>
                <span className='Linkedin_img' role="image"><img src={ln} style={{maxWidth: 30,position:'relative',left:'auto',marginRight:'5px'}}/></span>
                <span className='twitter_img' role="image"><img src={twitter} style={{maxWidth: 30,position:'relative',left:'auto',marginRight:'5px'}}/></span>
              </p>
              <p className="card-text"><small style={{color: "white"}}>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}