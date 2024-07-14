import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <div className="postTopLeft">
                <img src="/images/1.jpg" alt="" className="PostImge" />
                <span className="postUserName">Chamodya Bandara</span>
                <span className="postTime">5 min ago</span>
                </div>
            </div>

            <div className="postCenter">
                <div className="postCaption">
                    Hello I am Batman....!
                </div>
                <img src="/images/1.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomleft">
                    <img src="/images/like.png" alt="" className="readctionPic" />
                    <img src="/images/heart.png" alt="" className="readctionPic" />
                    <img src="/images/haha.png" alt="" className="readctionPic" />
                    <span className="likeCount">Batman and 153.4M other</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">18M comments
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
