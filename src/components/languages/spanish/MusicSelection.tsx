import { useState } from "react";

import ArtistSelection from "./ArtistSelection";
import SongSelection from "./SongSelection";

const MusicSelection = () => {
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);

  const artists = ["Manu Chao", "Shakira"];
  return (
    <div>
      <ArtistSelection
        artists={artists}
        selectedArtist={selectedArtist}
        setSelectedArtist={setSelectedArtist}
      />
      {selectedArtist && <SongSelection selectedArtist={selectedArtist} />}
    </div>
  );
};

export default MusicSelection;
