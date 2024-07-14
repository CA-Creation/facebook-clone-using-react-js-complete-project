import React from 'react'
import './addPost.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function Addpost() {
  return (
    <div className="addPost">
      <div className="addPostContainer">
        <div className="addPostTop">
          <img src="/images/1.jpg" alt="" className="addPostPic" />
          <input placeholder='whats in your mind...?' type="text" className="addPostInput" />
        </div>

            <hr className='postHr'/>

        <div className="addPostBottom">
            
          <div className="addPostOptions">
            <div className="addPostOption">
            <InsertPhotoIcon htmlColor='orange' className='addPhoto'/>
            <span className="addPhotoOptionText">Add Photo/Video</span>
            </div>

            <div className="addPostOption">
            <LocationOnIcon htmlColor='red' className='addPhoto'/>
            <span className="addPhotoOptionText">Add Location</span>
            </div>

            <div className="addPostOption">
            <LocalOfferIcon htmlColor='blue' className='addPhoto'/>
            <span className="addPhotoOptionText">Add Tag</span>
            </div>

            <div className="addPostOption">
            <LiveTvIcon htmlColor='tomato' className='addPhoto'/>
            <span className="addPhotoOptionText">Go Live</span>
            </div>

          </div>
          <button className="PostButton">Post</button>
        </div> 
      </div>
    </div>
  )
}
