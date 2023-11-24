import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter(
  //Array of objects/paths
  [{
    path:"/",
    element:<Body/>,
    children:[{
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]
  }]
);
function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <RouterProvider router={appRouter}/>

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
