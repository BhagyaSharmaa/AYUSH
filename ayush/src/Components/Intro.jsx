import { useState, useEffect } from 'react';
import Header from './Header';
import '../styles/Home.css';

const slides = [
  {
    images: [
      '/loginbg.png',
      //'/Introbg1.png'
    ],
    content: {
      title: 'Welcome to Ayush',
      description: 'Explore holistic wellness with Ayurveda, Yoga, and Naturopathy.'
    }
  },
  {
    images: [
     // '/loginbg.png',
      '/Introbg1.png'
    ],
    content: {
      title: 'Discover Our Services',
      description: 'Join us for personalized wellness programs and consultations.'
    }
  }
];

function Intro() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const switchInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % slides[currentSlide].images.length);
    }, 5000); // Change image every 7 seconds

    return () => clearInterval(switchInterval);
  }, [currentSlide]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Switch slide every 7 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setCurrentImage(0); // Reset image to the first one in the selected slide
  };

  return (
    <section className="hero-section">
      <Header />
      <div className="hero-content-container">
        <div className="hero-content">
          <h1>{slides[currentSlide].content.title}</h1>
          <p>{slides[currentSlide].content.description}</p>
        </div>
        <div className="hero-image-container">
          <img
            src={slides[currentSlide].images[currentImage]}
            alt="Slider"
            className="hero-image"
          />
        </div>
      </div>
      <div className="dots-container">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'dot-active' : 'dot-inactive'}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Intro;
