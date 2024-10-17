interface ArtistButtonProps {
  artist: string;
  selectedArtist: string | null;
  setSelectedArtist: (artist: string) => void;
}

const ArtistButton: React.FC<ArtistButtonProps> = ({
  artist,
  selectedArtist,
  setSelectedArtist,
}) => {
  const onArtistClick = () => {
    setSelectedArtist(artist);
  };

  const isSelected = selectedArtist === artist;

  return (
    <li
      className={`block my-2 text-2xl p-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition duration-300 cursor-pointer mx-auto w-64 ${
        isSelected ? "border-red-500 border-2" : ""
      }`}
      onClick={onArtistClick}
    >
      {artist}
    </li>
  );
};

export default ArtistButton;
