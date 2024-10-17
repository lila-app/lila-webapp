interface SeriesButtonProps {
  series: string;
  selectedSeries: string | null;
  setSelectedSeries: (series: string) => void;
}

const SeriesButton: React.FC<SeriesButtonProps> = ({
  series,
  selectedSeries,
  setSelectedSeries,
}) => {
  const onSeriesClick = () => {
    setSelectedSeries(series)
  };

  const isSelected = selectedSeries === series;


  return (
    <li
      className={`block my-2 text-2xl p-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition duration-300 cursor-pointer mx-auto w-64 ${
        isSelected ? "border-red-500 border-2" : ""
      }`}
      onClick={onSeriesClick}
    >
      {series}
    </li>
  );
};
export default SeriesButton;
