const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-12 bg-[#191818] mx-auto px-4">
      <h1 className="text-white text-xl">Logo</h1>
      <ul className="flex ">
        <li className="pl-4 text-xl font-cbd text-[#969696] hover:text-white transition-colors duration-300">
          Home
        </li>
        <li className="pl-4 text-xl font-cbd text-[#969696] hover:text-white transition-colors duration-300">
          About
        </li>
        <li className="pl-4 text-xl font-cbd text-[#969696] hover:text-white transition-colors duration-300">
          Pratice
        </li>
      </ul>

      <ul className="flex">
        <li className="pl-4 text-xl font-cbd text-[#969696] hover:text-white transition-colors duration-300">
          Login
        </li>
        <li className="pl-4 text-xl font-cbd text-[#969696] hover:text-white transition-colors duration-300">
          SignIn
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
