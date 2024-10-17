import ArtistButton from "../../ArtistButton";

interface ArtistSelectionProps {
  artists: string[];
  selectedArtist: string | null;
  setSelectedArtist: (artist: string) => void;
}

const ArtistSelection: React.FC<ArtistSelectionProps> = ({
  artists,
  selectedArtist,
  setSelectedArtist,
}) => {
  return (
    <ul className="m-8 flex flex-col">
      {artists.map((artist) => (
        <ArtistButton
          key={artist}
          artist={artist}
          selectedArtist={selectedArtist}
          setSelectedArtist={setSelectedArtist}
        />
      ))}
    </ul>
  );
};

export default ArtistSelection;
