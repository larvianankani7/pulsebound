import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { MainMenu } from "../features/main-menu/MainMenu";
import { AboutPage } from "../features/about/AboutPage";
import { FindingsPage } from "../features/findings/FindingsPage";
import { ExplorePage } from "../features/explore/ExplorePage";
import { LearningsPage } from "../features/learnings/LearningsPage";
import { SettingsPage } from "../features/settings/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainMenu /> },
      { path: "findings", element: <FindingsPage /> },
      { path: "explore", element: <ExplorePage /> },
      { path: "learnings", element: <LearningsPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);
