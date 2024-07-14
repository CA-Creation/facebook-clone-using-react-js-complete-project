import React from 'react'
import './coverPost.css'

export default function CoverPost() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <div className="postTopLeft">
                <img src="/images/1.jpg" alt="" className="PostImge" />
                <span className="postUserName">Chamodya Bandara</span>
                <span className="postTime">1 day ago</span>
                </div>
            </div>

            <div className="postCenter">
                <div className="postCaption">
                    Hello I am Superman....!
                </div>
                <img src="/images/cover.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomleft">
                    <img src="/images/like.png" alt="" className="readctionPic" />
                    <img src="/images/heart.png" alt="" className="readctionPic" />
                    <img src="/images/haha.png" alt="" className="readctionPic" />
                    <span className="likeCount">superman and 1.4B other</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">112M comments
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
