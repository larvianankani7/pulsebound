import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { MainMenu } from "../features/main-menu/MainMenu";
import { AboutPage } from "../features/about/AboutPage";
import { FindingsPage } from "../features/findings/FindingsPage";
import { PlaceholderSection } from "../shared/components/PlaceholderSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainMenu /> },
      { path: "findings", element: <FindingsPage /> },
      { path: "explore", element: <PlaceholderSection title="Explore" /> },
      { path: "learnings", element: <PlaceholderSection title="Learnings" /> },
      { path: "settings", element: <PlaceholderSection title="Settings" /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);
