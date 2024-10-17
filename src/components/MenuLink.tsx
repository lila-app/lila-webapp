import { Link } from "react-router-dom";

interface MenuLinkProps {
  route: string;
  title: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ route, title }) => {
  return (
    <Link
      to={route}
      className="block text-2xl w-64 p-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition duration-300 text-center mx-auto"
    >
      {title}
    </Link>
  );
};

export default MenuLink;
