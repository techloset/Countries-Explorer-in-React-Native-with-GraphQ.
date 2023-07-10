import CountryList from "./components/CountryList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <CountryList/>,
  },
 
]);

export default function App() {
  return <RouterProvider router={router} />;
}
