import { useState } from "react";

import CategoryButton from "../../CategoryButton";
import MusicSelection from "./MusicSelection";
import FilmSelection from "./FilmSelection";
import SeriesSelection from "./SeriesSelection";

type MediaType = "music" | "films" | "series";

const MediaSelection = () => {
  const [mediaType, setMediaType] = useState<MediaType>("music");

  const renderSelection = () => {
    switch (mediaType) {
      case "music":
        return <MusicSelection />;
      case "films":
        return <FilmSelection />;
      case "series":
        return <SeriesSelection />;
      default:
        return <MusicSelection />;
    }
  };

  const onMusicClick = () => {
    setMediaType("music");
  };

  const onFilmsClick = () => {
    setMediaType("films");
  };

  const onSeriesClick = () => {
    setMediaType("series");
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 mt-10">
        <CategoryButton
          onClickFunction={onMusicClick}
          buttonText="music"
          additionalBorderClass={
            mediaType === "music" ? "border-red-500 border-2" : ""
          }
        />
        <CategoryButton
          onClickFunction={onFilmsClick}
          buttonText="films"
          additionalBorderClass={
            mediaType === "films" ? "border-red-500 border-2" : ""
          }
        />
        <CategoryButton
          onClickFunction={onSeriesClick}
          buttonText="series"
          additionalBorderClass={
            mediaType === "series" ? "border-red-500 border-2" : ""
          }
        />
      </div>
      {renderSelection()}
    </div>
  );
};

export default MediaSelection;

/*
const [showArtists, setShowArtists] = useState(false);
  const [showSongs, setShowSongs] = useState(false);


  const onMusicClick = () => {
    setShowArtists(!showArtists);
  };

  const onArtistClick = () => {
    setShowSongs(!showSongs);
  };

  <div className="mt-10">
        <div onClick={onMusicClick}>
          <p>music</p>
        </div>
      </div>

      {showArtists && (
        <div className="mt-4">
          {artists.map((artist) => (
            <div key={artist} onClick={onArtistClick}>
              <p>{artist}</p>
            </div>
          ))}
        </div>
      )}

      {showSongs && (
        <div className="flex justify-center space-x-4 mt-4">
          {manuChao.map((song) => (
            <div key={song}>
              <p>{song}</p>
            </div>
          ))}
        </div>
      )}
*/
