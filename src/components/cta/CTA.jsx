import React from 'react';
import './cta.css';
import Article from '../../components/article/Article';

const CTA = () => (
  <div className=" elx__blog section__padding eternals">
    <h1 className="how-to-header">HOW TO GET AN ETERNALS</h1>
    <p className="sub-text">New to NFTs? No worries, here are some steps on what you need to do to obtain your Eternal</p>
    <div className="elx__whatelx section__margin how-to-section">
      <div className="elx__cta-container_groupB">
        <Article imgUrl='https://stonerapeclub.org/wp-content/uploads/2021/12/metamask.14d6da9e.gif' date="DOWNLOAD METAMASK"  text="The Chrome Metamask extension will allow you to make purchases with Ethereum. If you are on mobile, please use the Metamask app.
        Metamask"/>
        <Article imgUrl='https://stonerapeclub.org/wp-content/uploads/2021/12/ethereum.3d198f77.gif' date="ADD SOME ETH" text="You can purchase Ethereum through your Metamask wallet using Wyre or send Ethereum from an exchange like Coinbase."/>
        <Article imgUrl='https://stonerapeclub.org/wp-content/uploads/2021/12/metamask.14d6da9e.gif' date="MINT AN ETERNAL"  text="The Chrome Metamask extension will allow you to make purchases with Ethereum. If you are on mobile, please use the Metamask app.
        Metamask"/>
      </div>
    </div>
  </div>
);

export default CTA;
