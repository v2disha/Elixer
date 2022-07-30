import React from 'react';

import './faq.css';

const FAQ = () => (
  <div className="faq" id="faq">
    <div className="section-container">
      <div className="elx__blog-heading">
        <h1 className="gradient__text">Common Questions</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="tabs">
            <div className="tab">
              <input type="radio" id="rd1" name="rd"/>
              <label className="tab-label" htmlFor="rd1">What are the other benefits of owning a NANOPASS?</label>
              <div className="tab-content">
                <p className="paragraph-large">Owning a NANOPASS means you're a certified early supporter. You will gain priority access to our future projects and guaranteed presale slots in Phase 2+.
                <span className="p-spacer"></span>The second phase of our Main Storyline is already in the works. Internally we have dubbed it <span className="color-purple">'
                <span className="color-purple">Project SUBNET</span>'</span>. Pass holders will be guaranteed a spot on the whitelist. Although details cannot be disclosed for the time being, we promise that you will not be disappointed!</p>
              </div>
            </div>
            <div className="tab">
              <input type="radio" id="rd2" name="rd"/>
              <label className="tab-label" htmlFor="rd2">How many NANOPASSES will be available?</label>
              <div className="tab-content">
                <p className="paragraph-large">5,555</p>
              </div>
            </div>
            <div className="tab">
              <input type="radio" id="rd3" name="rd"/>
              <label className="tab-label" htmlFor="rd3">What is the mint price?</label>
              <div className="tab-content">
                <p className="paragraph-large">0.08888 ETH + gas fees.</p>
              </div>
            </div>
            <div className="tab">
              <input type="radio" id="rd4" name="rd"/>
              <label className="tab-label" htmlFor="rd4">When will you be minting?</label>
              <div className="tab-content">
                <p className="paragraph-large">Targeting mid December.</p>
              </div>
            </div>
            <div className="tab">
              <input type="radio" id="rd5" name="rd"/>
              <label className="tab-label" htmlFor="rd5">Which marketplace will NANOPASS be listed on?</label>
              <div className="tab-content">
                <p className="paragraph-large">We will be listed on OpenSea.</p>
              </div>
            </div>
            <div className="tab">
              <input type="radio" id="rd6" name="rd"/>
              <label className="tab-label" htmlFor="rd6">How do I get White Listed?</label>
              <div className="tab-content">
                <p className="paragraph-large">We will be distributing 4,555 whitelists through various methods. Being an early supporter will guarantee a spot in the whitelist. 1,000 NANOPASSES will be left for public mint.<span className="p-spacer"></span>
                <span className="p-spacer"></span>The team will also be hosting numerous community events on our Discord and Twitter to give away whitelist spots. Positive contributions to the community will not go unnoticed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FAQ;
