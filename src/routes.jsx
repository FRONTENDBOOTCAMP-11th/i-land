import { createBrowserRouter } from "react-router-dom";

import Layout from "@components/layout";
import MainPage from "@pages/index";
import Login from "@pages/user/Login";
import Search from "@pages/Search";
import Bookmarks from "@pages/Bookmarks";
import Carts from "@pages/Carts";
import ProductCreate from "@pages/ProductCreate";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <MainPage /> },
        { path: "user/login", element: <Login /> },
        { path: "search", element: <Search /> },
        { path: "bookmarks", element: <Bookmarks /> },
        { path: "carts", element: <Carts /> },
        { path: "productCreate", element: <ProductCreate /> },
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
