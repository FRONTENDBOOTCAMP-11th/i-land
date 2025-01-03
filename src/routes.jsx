import { createBrowserRouter } from "react-router-dom";

import Layout from "@components/layout";
import Main from "@pages/Main";
import Login from "@pages/user/Login";
import Signup from "@pages/user/Signup";
import Search from "@pages/Search";
import SearchResults from "@pages/SearchResults";
import Bookmarks from "@pages/Bookmarks";
import Create from "@pages/Create";
import Carts from "@pages/Carts";
import Products from "@pages/Products";
import Detail from "@pages/Detail";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Main /> },
        { path: "user/login", element: <Login /> },
        { path: "user/signup", element: <Signup /> },
        { path: "search", element: <Search /> },
        { path: "search/results", element: <SearchResults /> },
        { path: "bookmarks", element: <Bookmarks /> },
        { path: "create", element: <Create /> },
        { path: "carts", element: <Carts /> },
        { path: "products", element: <Products /> },
        { path: "products/:id", element: <Detail /> },
      ],
    },
  ],
  {
    future: {
      // 없으면 콘솔에 경고 표시
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

export default router;
