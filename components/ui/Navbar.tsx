'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavlistRef = useRef<HTMLDivElement>(null);
  const topNavRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='nav-container'>
      <div
      ref={topNavRef} 
      className={`top ${scrolled ? 'top-scrolled' : 'top-no-scroll'} ${isOpen && 'top-scrolled'}`}>
        <div className='left'>
          <Link href={'/'} className="link-wrap">
            <div className="nav-logo-wrap">
              <Image 
              src="/images/logo-white.png" 
              alt="Elevate Retail Logo" 
              fill
              style={{ objectFit: 'contain' }} // 'cover' or 'contain'
              />
            </div>
          </Link>
        </div>
        <div className='center'>
          <ul className='desktop-navlist'>
            <li>
              <Link href={'/'} className='d-navitem-link'>
                <div className='d-nav-item'>
                  <span className='d-navitem-text'>Home</span>
                  <div
                  className={`item-bottom-bar ${
                    pathname === '/' && 'w-full'}`}/>
                </div>
              </Link>
            </li>
            <li>
              <Link href={'/propertylist'} className='d-navitem-link'>
                <div className='d-nav-item'>
                  <span className='d-navitem-text'>Properties</span>
                  <div
                  className={`item-bottom-bar ${
                    pathname === '/propertylist' && 'w-full'}`}/>
                </div>
              </Link>
            </li>
            <li>
              <Link href={'/'} className='d-navitem-link'>
                <div className='d-nav-item'>
                  <span className='d-navitem-text'>About Us</span>
                  <div
                  className={`item-bottom-bar ${
                    pathname === '/about' && 'w-full'}`}/>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className='right'>
            <div className='d-nav-btn'>
                <Button href="/" variant="ghost">Schedule Inspection</Button>
            </div>
          <div 
            className="nav-menu-bar"
            onClick={toggleMenu}>
                <button 
                    className={`button is-text ${isOpen ? 'is-opened' : ''}`}
                    id="menu-button">
                        <div className="button-inner-wrapper">
                            <span className="icon menu-icon"></span>
                        </div>
                </button>
        </div>
        </div>
      </div>
      <div
      ref={mobileNavlistRef} 
      className={`bottom ${isOpen ? 'translate-y-0' : 'translate-y--700'}`}>
        <div className='nav-subject-tag'>
            <span></span><h3 className='tag-text'>Have a look around...</h3>
        </div>
        <ul className='mobile-navlist'>
          <li>
            <Link href={'/'} className='m-navitem-link' onClick={toggleMenu}>
              <span className='m-navitem-text'>Home</span>
            </Link>
          </li>
          <li>
            <Link href={'/propertylist'} className='m-navitem-link' onClick={toggleMenu}>
              <span className='m-navitem-text'>properties</span>
            </Link>
          </li>
          <li>
            <Link href={'/'} className='m-navitem-link' onClick={toggleMenu}>
              <span className='m-navitem-text'>About Us</span>
            </Link>
          </li>
        </ul>
        <div className='m-btn-wrap'>
            <Button href="/" variant="ghost">Schedule Inspection</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar