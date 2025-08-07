import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { Spinner } from "./components/Spinner";
import { Error } from "./screens/Error";
import { Home } from "./screens/Home";
import { Services } from "./screens/Services";
import { Contact } from "./screens/Contact";

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Spinner />}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// <div className="">
//       <Navbar/>
//       <div className="h-12 bg-[linear-gradient(31deg,var(--red-dark)_0%,var(--neutral-black)_21%,var(--primary-100)_64%,var(--neutral-black)_95%)]"></div>
//       <div className=" bg-red-500">
//         <Hero className="w-lg h-full" />
//         <Action className="w-40" />
//         <ExploreAction />
//       </div>
//
//       <h1 className="bg-primary text-3xl">hello</h1>
//     </div>
