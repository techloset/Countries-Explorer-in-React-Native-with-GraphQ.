import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import CountryList from "./components/CountryList"

const router = createBrowserRouter([
  {
    path: "/",
    element: <CountryList/>,
  },
  {
    path: "/country/:countryName",
    element: <CountryDetails/>,
  },
 
]);

export default function App() {
  return <RouterProvider router={router} />;
}
