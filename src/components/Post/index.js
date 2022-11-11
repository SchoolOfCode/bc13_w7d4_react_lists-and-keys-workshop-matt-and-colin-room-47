import React from 'react';

import './index.css';

function Post({
  postId,
  title,
  date,
  author,
  text,
  highlights,
  image,
  pigeonName}) {
  return (
    <article>
      <h2 className="title">{title}</h2>
      <div className="container">
        <img className="image" src={image.link} alt={image.alt} />
        <div className="overlay">
          <div className="text">{pigeonName}</div>
        </div>
      </div>
      <time className="date">{date}</time>
      <p className="author">{author}</p>
      <p className="content">{text}</p>
      {/* <li className='higlights'>{highlights}</li> */}
      {highlights.map((highlight) => {
        return <li key={highlights.indexOf(highlight)}>{highlight}</li>;
      })}
    </article>
  );
}

export default Post;

// postId: ,
//     title: ,
//     date: ,
//     author: ',
//     text: ,
//     highlights:[]
//      image: {}
