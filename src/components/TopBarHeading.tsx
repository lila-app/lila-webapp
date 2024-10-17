interface TopBarHeadingProps {
  heading: string;
}

const TopBarHeading: React.FC<TopBarHeadingProps> = ({ heading }) => {
  return <h1 className="text-3xl font-bold">{heading}</h1>;
};

export default TopBarHeading;
