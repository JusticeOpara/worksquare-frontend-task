import nav_bg from "../assets/nav_bg.png";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundImage: `url(${nav_bg})`,
      }}
      className="flex md:justify-between flex-col md:flex-row justify-center gap-4 items-center h-40 lg:px-52 bg-cover bg-center"
    >
      <div className="md:flex flex-col text-white">
        <h1 className="text-2xl">DreamDwell</h1>
        <span className="font-light italic justify-end flex text-lg">
          Estates
        </span>
      </div>

      <ul className="flex space-x-8 rounded-4xl items-center px-8 bg-white shadow h-16 cursor-default">
        <li className="hover:text-blue-500 font-light hover:font-normal">Home</li>
        <li className="font-light hover:text-blue-500 hover:font-normal">Property</li>
        <li className="hover:text-blue-500 font-light hover:font-normal">Contact</li>
      </ul>

      <button className="bg-gradient-to-b from-blue-500 to-blue-950 rounded-2xl px-4 py-4 hidden md:block text-white text-2xl">
        Become an Agent
      </button>
    </nav>
  );
};

export default Navbar;
