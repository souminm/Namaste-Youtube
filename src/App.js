import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import appContext from "./utils/appContext";
import { useState } from "react";

const appRouter = createBrowserRouter(
  //Array of objects/paths
  [
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]
);
function App() {
  const [menuState,setMenuState] = useState(false);
  return (
    <Provider store={appStore}>
      <div>
        <appContext.Provider value={{isMenuOpen:menuState,setMenuState}}>
          <Head />
          <RouterProvider router={appRouter} />
        </appContext.Provider>

        {/**Header
         * body
         *  side-bar-
         *    Menu-items
         * Main Container -
         *    Buttons-list
         *    Video-Containers
         *      Video Card
         */}
      </div>
    </Provider>
  );
}

export default App;
