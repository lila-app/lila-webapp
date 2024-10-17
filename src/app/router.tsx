import { createBrowserRouter } from "react-router-dom";

import NotFound from "./routes/NotFound";
import Home from "./routes/Home";
import AboutPage from "./routes/AboutPage";
import Statistics from "./routes/Statistics";
import Awards from "./routes/Awards";
import Options from "./routes/Options";
import Courses from "./routes/Courses";
import SinglePlayer from "./routes/SinglePlayer";
import MultiPlayer from "./routes/MultiPlayer";
import Game from "./routes/Game";
import Player from "./routes/Player";

import English from "../components/languages/english/English";
import EnglishCoursePage from "../components/languages/english/EnglishCoursePage";
import French from "../components/languages/french/French";
import FrenchCoursePage from "../components/languages/french/FrenchCoursePage";
import Italian from "../components/languages/italian/Italian";
import ItalianCoursePage from "../components/languages/italian/ItalianCoursePage";
import German from "../components/languages/german/German";
import GermanCoursePage from "../components/languages/german/GermanCoursePage";
import Spanish from "../components/languages/spanish/Spanish";
import CoursePage from "../components/languages/spanish/CoursePage";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/statistics",
    element: <Statistics />,
  },
  {
    path: "/awards",
    element: <Awards />,
  },
  {
    path: "/options",
    element: <Options />,
  },
  {
    path: "/courses",
    element: <Courses />,
    children: [
      {
        path: "english",
        element: <EnglishCoursePage />
      },
      {
        path: "french",
        element: <FrenchCoursePage />
      },
      {
        path: "italian",
        element: <ItalianCoursePage />
      },
      {
        path: "german",
        element: <GermanCoursePage />
      },
      {
        path: "spanish",
        element: <CoursePage />
      }
    ]
  },
  {
    path: "/singleplayer",
    element: <SinglePlayer />,
    children: [
      {
        path: "english",
        element: <English />
      },
      {
        path: "french",
        element: <French />
      },
      {
        path: "italian",
        element: <Italian />
      },
      {
        path: "german",
        element: <German />
      },
      {
        path: "spanish",
        element: <Spanish />,
      },
    ],
  },
  {
    path: "/multiplayer",
    element: <MultiPlayer />,
  },
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/player",
    element: <Player />,
  },
]);
