import SeriesButton from "./languages/spanish/SeriesButton";

interface SeriesOverviewProps {
  series: string[];
  selectedSeries: string | null;
  setSelectedSeries: (artist: string) => void;
}

const SeriesOverview: React.FC<SeriesOverviewProps> = ({
  series,
  selectedSeries,
  setSelectedSeries,
}) => {
  return (
    <ul className="m-8 flex flex-col">
      {series.map((singleSeries) => (
        <SeriesButton
          key={singleSeries}
          series={singleSeries}
          selectedSeries={selectedSeries}
          setSelectedSeries={setSelectedSeries}
        />
      ))}
    </ul>
  );
};

export default SeriesOverview;
