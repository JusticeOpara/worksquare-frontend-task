const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-300 h-36 px-48">
      <div className="flex flex-col">
        <h1 className="text-2xl">DreamDwell</h1>
        <span className="font-light italic justify-end flex text-base">Estates</span>
      </div>


      <ul className="flex space-x-8 border rounded-4xl items-center px-8  h-16 cursor-default">
        <li className="hover:text-blue-500 font-light ">Home</li>
        <li className="font-light hover:text-blue-500 ">Property</li>
        <li className="hover:text-blue-500 font-light">Contact</li>
      </ul>

      <button className="bg-blue-700 rounded-2xl h-14 text-white text-2xl py-3 px-6">
        Become an Agent
      </button>
    </nav>
  );
};

export default Navbar;
