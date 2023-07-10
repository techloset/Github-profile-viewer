import GitHubProfile from "./components/GitHubProfile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <GitHubProfile/>,
  },
 
]);

export default function App() {
  return <RouterProvider router={router} />;
}
