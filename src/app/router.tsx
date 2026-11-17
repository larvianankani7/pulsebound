/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { MainMenu } from "../features/main-menu/MainMenu";
import { PageLoadingFallback } from "../shared/components/PageLoadingFallback";

const FindingsPage = lazy(() => import("../features/findings/FindingsPage"));
const ExplorePage = lazy(() => import("../features/explore/ExplorePage"));
const LearningsPage = lazy(() => import("../features/learnings/LearningsPage"));
const SettingsPage = lazy(() => import("../features/settings/SettingsPage"));
const AboutPage = lazy(() => import("../features/about/AboutPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainMenu /> },
      {
        path: "findings",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <FindingsPage />
          </Suspense>
        ),
      },
      {
        path: "explore",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <ExplorePage />
          </Suspense>
        ),
      },
      {
        path: "learnings",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <LearningsPage />
          </Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <SettingsPage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <AboutPage />
          </Suspense>
        ),
      },
    ],
  },
]);
