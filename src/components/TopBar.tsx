import TopBarHeading from "./TopBarHeading";

interface TopBarProps {
  heading: string;
}

const TopBar: React.FC<TopBarProps> = ({ heading }) => {
  return (
    <div className="bg-purple-700 text-white p-4 shadow-lg mb-10">
      <div className="container mx-auto flex justify-center items-center">
        <TopBarHeading heading={heading} />
      </div>
    </div>
  );
};

export default TopBar;
