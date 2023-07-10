import GitHubProfile from "./components/GitHubProfile";
import World from "./components/World";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GitHubProfile/>,
  },
  {
    path: "/World",
    element: <World/>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
