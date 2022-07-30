import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05, blog06 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="elx__blog section__padding" id="blog">
    <div className="elx__blog-heading">
      <h1 className="gradient__text">The Team</h1>
    </div>
    <div className="elx__blog-container">
      <div className="elx__blog-container_groupB">
        <Article imgUrl={blog01} date="AGENT REI" designation="PROJECT LEAD"  link="" text="The founder of this project, he is the stoic and somber glue that holds the NANOPASS family together. Leaning on his wealth of experience as Managing Director of many successful IRL ventures, he leads the charge in executing our ambitious roadmap and build NANOPASS into the next bluechip NFT project."/>
        <Article imgUrl={blog02} date="AGENT RUI" designation="ARTIST LEAD"  link="" text="Fearless Leader and Art Director, champion of all things aesthetic. She has garnered praise for her unyielding attention to detail and artistic style. Her impressive team has worked on massively successful games such as Valorant, and like every good leader, Rui is nothing without the talented artists behind her." />
        <Article imgUrl={blog03} date="AGENT YURI" designation="COMMUNITY LEAD"  link="" text="The Queen of Ramen, leader of the Simps. She plans to dominate the Nanoverse with her army of Ramen lovers. As a community leader, she engages with everyone, gives out free Ramen, and abuses her Whitelist distribution authority. She is a Head Marketer at a financial services conglomerate and an early adopter of NFTs & Crypto. Her strategy? Ape first, understand later." />
        <Article imgUrl={blog04} date="DEV" designation="TECH LEAD"  link="" text="The brains, the brawn, the hidden pillar behind NANOPASS. With over 10 years experience in blockchain dev, he reads only in code." />
        <Article imgUrl={blog05} date="IAMABSINTHE" designation="MARKETING LEAD"  link="" text="Lead Marketer who has $0 budget – trying to do the impossible. She often complains to Rei about how limited the marketing budget is. She is a funds management analyst and ex-streamer of LoL and Valorant. Spent most of her year studying for CFA until a 3-month lockdown happened and the exam became non-existent. Now she’s a full time NFT aper." />
        <Article imgUrl={blog06} date="IAMABSINTHE" designation="MARKETING LEAD"  link="" text="Lead Marketer who has $0 budget – trying to do the impossible. She often complains to Rei about how limited the marketing budget is. She is a funds management analyst and ex-streamer of LoL and Valorant. Spent most of her year studying for CFA until a 3-month lockdown happened and the exam became non-existent. Now she’s a full time NFT aper." />
      </div>
    </div>
  </div>
);

export default Blog;
