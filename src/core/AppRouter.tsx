import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Post from "../pages/Post"
import Home from "@/pages/Home";
import { ROUTE } from "./routes";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<App />}>
      <Route index element={<Home />} />
      <Route path={ROUTE.POST}>
        <Route path=":number" element={<Post />} />
      </Route>
    </Route>
  )
)

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};