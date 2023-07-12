import GitHubProfile from "./components/GitHubProfile";
import ProfileListDetails from "./components/ProfileListDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RepoDetails from "./components/RepoDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <GitHubProfile/>,
  },
  {
    path: "/ProfileListDetails/:userName/:gitRepo",
    element: <RepoDetails/>,
  },
 
]);

export default function App() {
  return <RouterProvider router={router} />;
}
