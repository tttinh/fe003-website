import Navbar from './navbar';

const Header = () => {
  return (
    <header
      className="mb-4 flex min-h-screen w-full items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="header"
    >
      <Navbar />
      <div className="container-auto text-center text-white">
        <h1 className="inline-block max-w-3xl pt-20 text-5xl font-semibold sm:text-6xl md:text-[82px]">
          Explore homes that fit your dreams
        </h1>
        <div className="mt-16 space-x-6">
          <a className="rounded border border-white px-8 py-3" href="#">
            Projects
          </a>
          <a className="rounded bg-blue-500 px-8 py-3" href="#">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
