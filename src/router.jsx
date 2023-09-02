import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Home } from "./pages/home/Home";
import { My } from "./pages/my/my/My";
import { Bookmark } from "./pages/my/bookmark/Bookmark";
import { Review } from "./pages/my/review/Review";
import { Setting } from "./pages/my/setting/Setting";
import { CoWrite } from "./pages/community/communityWrite/CoWrite";
import { CoDetail } from "./pages/community/communityDetail/CoDetail";
import { CoEditor } from "./pages/community/communityMain/CoEditor";
import { CoFree } from "./pages/community/communityMain/CoFree";
import { CoHot } from "./pages/community/communityMain/CoHot";
import { CoQna } from "./pages/community/communityMain/CoQna";
import NotFound from "./NotFound";
import { Login } from "./pages/login/Login";
import { Join } from "./pages/login/Join";
import { JoinInput } from "./pages/login/JoinInput";
import { Success } from "./pages/login/Success";
import { ShowList } from "./pages/show/showList/ShowList";
import { ShowDetail } from "./pages/show/showDetail/ShowDetail";
import { ViewDetail } from "./components/show/showDetail/ViewDetail";
import { Category } from "./pages/category/Category";
import { CoNotice } from "./pages/community/communityMain/CoNotice";
import { ShowCalendar } from "./pages/my/ShowCalendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      // 로그인
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "join_1",
        element: <Join />,
      },
      {
        path: "join_2",
        element: <JoinInput />,
      },
      {
        path: "success",
        element: <Success />,
      },
      // 공연
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "showlist",
        element: <ShowList />,
      },
      {
        path: ":detailId",
        element: <ShowDetail />,
      },
      {
        path: ":detailId/img",
        element: <ViewDetail />
      },
      // 마이페이지
      {
        path: "my",
        element: <My />,
      },
      {
        path: "my/bookmark",
        element: <Bookmark />,
      },
      {
        path: "my/showcalendar",
        element: <ShowCalendar />,
      },
      {
        path: "my/review",
        element: <Review />,
      },
      {
        path: "my/ticket",
        element: <Review />,
      },
      {
        path: "my/setting",
        element: <Setting />,
      },
      // 커뮤니티
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
        path: "community/qna",
        element: <CoQna />,
      },
      {
        path: "community/notice",
        element: <CoNotice />
      },
      {
        path: "community",
        element: <CoHot />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;