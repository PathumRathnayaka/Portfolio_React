"use client";
import React, { useState, useEffect } from 'react';
import { 
  Navbar, 
  NavBody, 
  NavItems, 
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton
} from './ui/resizable-navbar'; // Update this path as needed

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Services', link: '#services' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar className="transition-all duration-300">
      {/* Desktop Navigation */}
      <NavBody visible={isScrolled} className="px-4">
        <NavbarLogo />
        <NavItems 
          items={navItems} 
          className="mx-auto"
        />
        <div className="relative z-20 flex items-center justify-end gap-2">
          <NavbarButton variant="secondary" href="#contact">
            Contact
          </NavbarButton>
          <NavbarButton variant="primary" href="#articles">
          articles
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav visible={isScrolled}>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isMenuOpen} onClick={toggleMenu} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="w-full px-3 py-2 text-lg font-medium text-gray-800 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="mt-4 flex w-full flex-col gap-2">
            <NavbarButton variant="secondary" href="#contact" className="w-full">
              Contact
            </NavbarButton>
            <NavbarButton variant="primary" href="#articles" className="w-full">
            articles
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}