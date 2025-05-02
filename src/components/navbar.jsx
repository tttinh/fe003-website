import { assets } from '../assets/assets';

const links = [
  {
    href: '#header',
    label: 'Home',
  },
  {
    href: '#header',
    label: 'About',
  },
  {
    href: '#header',
    label: 'Projects',
  },
  {
    href: '#header',
    label: 'Testimonials',
  },
];

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-10 w-full">
      <div className="container-auto flex-between bg-transparent">
        {/* logo image */}
        <img src={assets.logo} alt="logo" />

        {/* navigation links  */}
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
      </div>
    </nav>
  );
};

export default Navbar;
