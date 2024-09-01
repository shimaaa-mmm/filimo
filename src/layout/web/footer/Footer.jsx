import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap'; // Import Bootstrap Dropdown
import { FaTelegramPlane, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import icons for Telegram, Instagram, and Twitter
import { AiFillYoutube } from 'react-icons/ai'; // Import icon for Aparat

const Footer = () => {
  const [showMore, setShowMore] = useState(false);
  const [hovering, setHovering] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMore(false);
        setHovering(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    setShowMore(true);
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setTimeout(() => {
      if (!hovering) {
        setShowMore(false);
      }
    }, 100);
  };

  return (
    <footer className="w-100 bg-black text-white">
      <div className="container">
        <div className="row justify-content-between align-items-center py-3">
          {/* Left Section - Social Networks */}
          <div className="col-auto position-relative">
            <Dropdown className="custom-dropdown" style={{marginLeft: '54px'}}>
              <Dropdown.Toggle 
                variant="link" 
                id="dropdown-basic" 
                className="text-white dropdown-toggle text-decoration-none"
                style={{ 
                  transform: 'translateY(0)', 
                  opacity: 1,
                  fontSize: '12px',
                  marginLeft: '-52px'
                }}
              >
                شبکه‌های اجتماعی
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-black border-0 mt-2" style={{ 
                transform: 'translateY(0)', 
                opacity: 1 
              }}>
                <Dropdown.Item href="#" className="text-white d-flex align-items-center" style={{ fontSize: '15px' }}>
                  <FaTelegramPlane className="me-2" />
                  تلگرام
                </Dropdown.Item>
                <Dropdown.Item href="#" className="text-white d-flex align-items-center" style={{ fontSize: '15px' }}>
                  <FaInstagram className="me-2" />
                  اینستاگرام
                </Dropdown.Item>
                <Dropdown.Item href="#" className="text-white d-flex align-items-center" style={{ fontSize: '15px' }}>
                  <FaTwitter className="me-2" />
                  توییتر
                </Dropdown.Item>
                <Dropdown.Item href="#" className="text-white d-flex align-items-center" style={{ fontSize: '15px' }}>
                  <AiFillYoutube className="me-2" />
                  اپارات
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Right Section - Links */}
          <div className="col-auto position-relative" ref={dropdownRef}>
            <ul className="list-inline mb-0" style={{ direction: "rtl", marginRight: '-80px', fontSize: '15px' }}>
              <li className="list-inline-item">
                <a href="#" className="text-decoration-none" style={{ fontSize: '12px' }}>
                  <FontAwesomeIcon icon={faTv} className="me-2" />
                  تماشا با تلویزیون
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-decoration-none" style={{ fontSize: '12px' }}>
                  اپلیکیشن‌ها
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-decoration-none" style={{ fontSize: '12px' }}>
                  تماس و پشتیبانی
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-decoration-none" style={{ fontSize: '12px' }}>
                  فروشگاه
                </a>
              </li>
              <li className="list-inline-item position-relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Dropdown show={showMore} onToggle={() => setShowMore(!showMore)}>
                  <Dropdown.Toggle as="a" className="text-decoration-none fst-normal" style={{ fontSize: '12px', marginRight: '10px' }}>
                    سایر لینک‌ها
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="bg-black text-white border-0 mt-2" style={{ fontSize: '12px', width: '260px', marginLeft: '-190px', marginBottom: '20px' }}>
                    <Dropdown.Item href="#" className="text-white text-decoration-none">به ما بپیوندید</Dropdown.Item>
                    <Dropdown.Item href="#" className="text-white text-decoration-none">تبلیغات در فیلیمو</Dropdown.Item>
                    <Dropdown.Item href="#" className="text-white text-decoration-none">دانلود فیلم‌ها</Dropdown.Item>
                    <Dropdown.Item href="#" className="text-white text-decoration-none">دانلود سریال‌ها</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
