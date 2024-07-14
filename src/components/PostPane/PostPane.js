import React from 'react'
import './postPane.css';
import Addpost from '../AddPost/Addpost';
import Post from '../Post/Post';
import CoverPost from '../Cover/CoverPost';
import Post2 from '../post2/Post2';

export default function PostPane() {
  return (
    <div className="postPaneBox">
      <Addpost></Addpost>
      <Post></Post>
      <CoverPost/>
      <Post2/>
    </div>
  )
}
