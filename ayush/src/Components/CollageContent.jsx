import React from 'react';
import '../styles/Collage.css';

function CollageContent() {
  return (
    <section className="second-section">
      <div className="image-container">
        <div className="image-collage">
          <img src="/coll1.jpeg" alt="Image 1" />
          <img src="/coll2.jpeg" alt="Image 2" />
          <img src="/coll3.jpeg" alt="Image 3" />
          <img src="/coll4.jpeg" alt="Image 4" />
        </div>
      </div>
      <div className="text-content">
        <h2>Your Title Here</h2>
        <p>Your content goes here. Provide details about your services or any other relevant information.</p>
      </div>
    </section>
  );
}

export default CollageContent;
