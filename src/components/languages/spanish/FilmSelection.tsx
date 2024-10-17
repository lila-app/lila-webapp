import { useState } from "react";

const FilmSelection = () => {
  const [selectedFilm, setSelectedFilm] = useState<string | null>(null);

  const films = ["Buscando a Nemo", "El Gran Lebowski"];

  const onFilmClick = (film: string) => {
    setSelectedFilm(film);
  };

  return (
    <div className="m-4 flex flex-col">
      {films.map((film) => (
        <div
          key={film}
          className={`block my-2 text-2xl p-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition duration-300 cursor-pointer mx-auto w-64 ${
            selectedFilm === film ? "border-red-500 border-2" : ""
          }`}
          onClick={() => onFilmClick(film)}
        >
          {film}
        </div>
      ))}
    </div>
  );
};

export default FilmSelection;
