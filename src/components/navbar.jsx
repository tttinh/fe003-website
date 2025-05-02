import { useState } from 'react';
import { assets } from '../assets/assets';
import { useEffect } from 'react';

const links = [
  {
    href: '#header',
    label: 'Home',
  },
  {
    href: '#about',
    label: 'About',
  },
  {
    href: '#projects',
    label: 'Projects',
  },
  {
    href: '#testimonials',
    label: 'Testimonials',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Important!!!
  // This is an interesting technique that prevent scrolling when the menu is open. It allow
  // scrolling when the menu is close or the menu open but the screen is desktop size.
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <nav className="absolute top-0 left-0 z-10 w-full">
      <div className="container-auto flex-between bg-transparent">
        {/* logo image */}
        <img src={assets.logo} alt="logo" />

        {/* desktop navigation links  */}
        <ul className="hidden gap-7 text-white md:flex">
          {links.map((link, index) => (
            <li key={index}>
              <a
                className="cursor-pointer hover:text-gray-400"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* signup button */}
        <button className="hidden cursor-pointer rounded-full bg-white px-8 py-2 md:block">
          Sign up
        </button>

        {/* mobile menu icon */}
        <img
          className="w-7 cursor-pointer md:hidden"
          src={assets.menu_icon}
          alt="open menu icon"
          onClick={() => setIsMenuOpen(true)}
        />
      </div>

      {/* mobile navigation links */}

      <div
        className={` ${isMenuOpen ? 'fixed w-full' : 'h-0 w-0'} top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 md:hidden`}
      >
        <div
          className="flex cursor-pointer justify-end p-6"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.cross_icon} className="w-6" alt="close menu icon" />
        </div>
        <ul className="flex flex-col items-center gap-2 px-5 text-lg font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <a
                className="inline-block rounded-full px-4 py-2"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
