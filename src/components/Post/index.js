import React from 'react';

import './index.css';

function Post({
  postId,
  title,
  date,
  author,
  text,
  highlights,
  image }) {
  return <article>
    <h2 className='title'>{title}</h2>
    <time className= 'date'>{date}</time>
    <p className='author'>{author}</p>
    <p className='text'>{text}</p>
    {/* <li className='higlights'>{highlights}</li> */}
    {/* <img className = 'image' src = {image.link} alt = {image.alt} /> */}
  </article>;
}

export default Post;

// postId: ,
//     title: ,
//     date: ,
//     author: ',
//     text: ,
//     highlights:[]
//      image: {}
