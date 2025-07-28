const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-xl font-bold text-blue-600">StayFinder</div>
      <nav className="flex gap-4 text-gray-700 mt-2 md:mt-0">
        <a href="#" className="hover:text-blue-500">
          Rooms
        </a>
        <a href="#" className="hover:text-blue-500">
          Mansions
        </a>
        <a href="#" className="hover:text-blue-500">
          Countryside
        </a>
      </nav>
      <div className="mt-2 md:mt-0">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 border rounded-md mr-2"
        />
        <button className="text-sm text-blue-500 hover:underline mr-2">
          Sign In
        </button>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
