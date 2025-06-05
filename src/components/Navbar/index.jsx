import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-6 py-4 flex items-center justify-center gap-10">
      <Link
        to="/"
        className="text-lg font-medium text-blue-700 hover:text-blue-900 transition-colors"
      >
        Home
      </Link>

      <Link
        to="/favoritos"
        className="text-lg font-medium text-yellow-500 hover:text-yellow-600 transition-colors"
      >
        Favoritos
      </Link>
    </nav>
  );
};

export default Navbar;
