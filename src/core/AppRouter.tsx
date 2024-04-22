import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Post from "../pages/Post"
import { ROUTE } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path={ROUTE.HOME} element={<Home />} />
      <Route path={ROUTE.POST} element={<Post />} >
          <Route path=":number" />
      </Route>
    </Routes>
  );
};