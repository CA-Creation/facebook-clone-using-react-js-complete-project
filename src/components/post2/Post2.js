import React from 'react'
import './post2.css'

export default function Post2() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <div className="postTopLeft">
                <img src="/images/1.jpg" alt="" className="PostImge" />
                <span className="postUserName">Chamodya Bandara</span>
                <span className="postTime">4 days ago</span>
                </div>
            </div>

            <div className="postCenter">
                <div className="postCaption">
                    Hey Im flying....!
                </div>
                <img src="/images/post2.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomleft">
                    <img src="/images/like.png" alt="" className="readctionPic" />
                    <img src="/images/heart.png" alt="" className="readctionPic" />
                    <img src="/images/haha.png" alt="" className="readctionPic" />
                    <span className="likeCount">superman and 2.4B other</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">242M comments
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
