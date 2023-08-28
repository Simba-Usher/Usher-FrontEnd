import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Home } from "./pages/home/Home";
import { SearchModal } from "./pages/searchModal/searchModal";
import { ShowDetail } from "./pages/ShowDetail/ShowDetail";
import { My } from "./pages/my/My";
import { Bookmark } from "./pages/my/Bookmark";
import { Calender } from "./pages/my/Calender";
import { Review } from "./pages/my/Review";
import { Setting } from "./pages/my/Setting";
import { Community } from "./pages/community/communityMain/Community";
import { CoWrite } from "./pages/community/communityWrite/CoWrite";
import { CoDetail } from "./pages/community/communityDetail/CoDetail";
import { CoEditor } from "./pages/community/communityMain/CoEditor";
import { CoFree } from "./pages/community/communityMain/CoFree";
import { CoHot } from "./pages/community/communityMain/CoHot";
import { CoQna } from "./pages/community/communityMain/CoQna";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "search",
        element: <SearchModal />,
      },
      {
        path: ":detailId",
        element: <ShowDetail />,
      },
      {
        path: "my",
        element: <My />,
      },
      {
        path: "my/bookmark",
        element: <Bookmark />,
      },
      {
        path: "my/calender",
        element: <Calender />,
      },
      {
        path: "my/review",
        element: <Review />,
      },
      {
        path: "my/setting",
        element: <Setting />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "community/write",
        element: <CoWrite />,
      },
      {
        path: "community/:detailId",
        element: <CoDetail />,
      },
      {
        path: "community/editor",
        element: <CoEditor />,
      },
      {
        path: "community/free",
        element: <CoFree />,
      },
      {
        path: "community/hot",
        element: <CoHot />,
      },
      {
        path: "community/qna",
        element: <CoQna />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;