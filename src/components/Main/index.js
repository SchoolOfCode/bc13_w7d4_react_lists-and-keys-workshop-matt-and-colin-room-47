import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  // {
  //   postId, title, date, author, text, highlights, image;
  // }
  return <main id="main">{posts.map((post) => {
    {/* console.log('post is:', postId);
    console.log('title is:', title);
    console.log('date is:', date);
    console.log('author is:', author); */}
    //console.log('text is:', text);
    return (<Post key={post.postId}
      title={post.title}
      date={post.date}
      author={post.author}
      text={post.text}
    // highlights={highlights}
    //image={image} 
    />
    );
  })}</main>
}

export default Main;
