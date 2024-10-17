import { ReactNode } from 'react';

interface MenuBackgroundProps {
  children: ReactNode;
}

const MenuBackground: React.FC<MenuBackgroundProps> = ({ children }) => {
  return <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">{children} </div>;
};

export default MenuBackground;
