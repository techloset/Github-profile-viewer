import GitHubProfile from "./components/GitHubProfile";
import World from "./components/World";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
console.log(process.env.REACT_APP_APPOLLO_TOKEN)
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
