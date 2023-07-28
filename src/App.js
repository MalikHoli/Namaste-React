import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
// import Contact from "./components/Contact"
// import Error from "./components/Error"
// import { createBrowserRouter, RouterProvider} from "react-router-dom";

const Applayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
);

// const appRouter = createBrowserRouter([
//     {
//         path:"/",
//         element: <Applayout />,
//         errorElement: <Error />
//     },
//     {
//         path:"/about",
//         element: <About />
//     },
//     {
//         path:"/contact",
//         element: <Contact />
//     }
// ])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout />) // Before using react-router-dom we were just rendering the component but now we can make use of "RouterProvider" below
// root.render(<RouterProvider router={appRouter}/>)