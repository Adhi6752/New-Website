import React, { Children } from "react";
import  ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
// import { About } from "./About";
import Footer from "./src/components/Footer";
import { Outlet } from "react-router-dom";
import Body from "./src/components/Body";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
// const About = lazy(() => import("./About"))

const AppLayout = () => {
    return (
      <>
       <Header />
       <Outlet />
       <Footer />
       </>
    );

};

const appRouter = createBrowserRouter([
   {
       path : "/",
       element : <AppLayout />,
       children : [
   
   {
       path : "/",
       element : <Body />
   },
   
]
   },
   
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);