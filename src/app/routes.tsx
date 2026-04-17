import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { CoursePage } from "./pages/CoursePage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/course/:courseId",
    Component: CoursePage,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
