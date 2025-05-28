import nav_bg from "../assets/nav_bg.png"

const Navbar = () => {
  return (
    <nav
    style={{
        backgroundImage: `url(${nav_bg})`,
      }}
     className="flex md:justify-between justify-center items-center h-36 lg:px-52 bg-cover bg-center">
      <div className="md:flex flex-col hidden text-white">
        <h1 className="text-2xl">DreamDwell</h1>
        <span className="font-light italic justify-end flex text-lg">
          Estates
        </span>
      </div>

      <ul className="flex space-x-8 rounded-4xl items-center px-8 bg-white shadow h-16 cursor-default">
        <li className="hover:text-blue-500 font-light ">Home</li>
        <li className="font-light hover:text-blue-500 ">Property</li>
        <li className="hover:text-blue-500 font-light">Contact</li>
      </ul>

      <button className="bg-blue-700 rounded-2xl h-14 text-white text-2xl py-3 px-6 hidden  lg:flex">
        Become an Agent
      </button>
    </nav>
  );
};

export default Navbar;
