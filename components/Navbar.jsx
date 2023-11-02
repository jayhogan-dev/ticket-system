import Link from 'next/link';
import { FaTicketAlt, FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-8">
        <Link href="/">
          <FaHome className="icon" />
        </Link>
        <Link href="/ticket-page/new">
          <FaTicketAlt className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">jay@gmail.com</p>
      </div>
    </nav>
  );
};

export default Navbar;
