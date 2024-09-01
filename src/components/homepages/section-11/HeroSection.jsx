import React from 'react';
import './index.scss';

const HeroSection = () => {
  return (
    <section className="heroo-section">
      <div className='Intro_details-bg d-overlay'></div>
      <div className="hero-content">
      <img src='/public/images/fili.webp'style={{marginBottom: '33px',  marginLeft: '-32px'}}/>
        <div className="hero-features">
          <div className="feature-item">
            <span className="check-icon">✔</span> هزاران فیلم و سریال خارجی (دوبله و زیرنویس)
          </div>
          <div className="feature-item">
            <span className="check-icon">✔</span> هزاران انیمیشن و کارتون برای کودکان
          </div>
          <div className="feature-item">
            <span className="check-icon">✔</span> پشتیبانی 24 ساعته برای راهنمایی شما
          </div>
        </div>
        <button className="cta-button">خرید اشتراک و تماشا</button>
      </div>
    </section>
  );
};

export default HeroSection;
