import { useState } from "react";

import SeriesOverview from "../../SeriesOverview";
import SeasonSelection from "../../SeasonSelection";

const SeriesSelection = () => {
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);

  const series = ["Suits", "Greys Anatomy"];

  return (
    <div>
      <SeriesOverview
        series={series}
        selectedSeries={selectedSeries}
        setSelectedSeries={setSelectedSeries}
      />
      {selectedSeries && <SeasonSelection selectedSeries={selectedSeries} />}
    </div>
  );
};

export default SeriesSelection;
