interface SongSelectionProps {
  selectedArtist: string;
}

const SongSelection: React.FC<SongSelectionProps> = ({ selectedArtist }) => {
  const manuChaoSongs = ["me gustas tu", "clandestino"];
  const shakiraSongs = ["Loca", "la la la"];

  let songsToDisplay: string[] = [];

  if (selectedArtist === "manu chao") {
    songsToDisplay = manuChaoSongs;
  } else if (selectedArtist === "shakira") {
    songsToDisplay = shakiraSongs;
  }

  return (
    <div>
      {selectedArtist && (
        <ul>
          {songsToDisplay.map((song) => (
            <li key={song}>{song}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SongSelection;
