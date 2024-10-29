import React from "react";
import HomePage from "./pages/home";
import MainLayout from "./layout/mainlayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./papka/auth";
import NewPage from "./components/newPage";
import BiletPage from "./components/biletPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ExtraPage from "./components/extrapage";
import Search from "./components/search";
import Kino from "./components/kino";
import "bootstrap/dist/css/bootstrap.min.css";
import Kinonibospage from "./components/kinonibospage";
import Lastpage from "./components/lastpage";
import { Provider } from "react-redux";
import store from "./redux/store";
const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/test", element: <Login /> },
    { path: "/newpage", element: <NewPage /> },
    { path: "/biletpage", element: <BiletPage /> },
    { path: "/extrapage", element: <ExtraPage /> },
    { path: "/search", element: <Search /> },
    { path: "/kino", element: <Kino /> },
    { path: "/kinonibospage", element: <Kinonibospage /> },
    { path: "/lastpage", element: <Lastpage /> },
  ]);

  return (
    <div className="bg-main-black min-h-[100vh] flex flex-col">
   <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <MainLayout>
            <RouterProvider router={router} />
            <ToastContainer />
          </MainLayout>
        </AuthContextProvider>
      </QueryClientProvider>
     </Provider>
    </div>
  );
}

export default App;
