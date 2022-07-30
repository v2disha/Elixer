import React from 'react';
import './article.css';
import linkedIn from '../../assets/linkedIn.png';

const Article = ({ imgUrl, date, text, designation, link }) => (
  <div className="elx__blog-container_article">
    <div className="elx__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="elx__blog-container_article-content">
      <div>
        <p className="name">{date}</p>
        <div className="seprator"></div>
        <p className="designation">{designation}  {link != undefined && <span><a href={link}><img className="see-more" src={linkedIn} alt="instagram" /></a></span> }</p>
        <h3>{text}</h3>
      </div>
    </div>
  </div>
);

export default Article;
