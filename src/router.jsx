import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Home } from "./pages/home/Home";
import { My } from "./pages/my/my/My";
import { MyLike } from "./pages/my/like/MyLike";
import { MyWrite} from "./pages/my/write/MyWrite";
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
import { Ticket } from "./pages/my/ticket/Ticket";
import { ReviewWrite } from "./pages/show/reviewWrite/ReviewWrite";
import { ShowReview } from "./pages/show/showReview/ShowReview";
import { ShowCalendar } from "./pages/my/calendar/ShowCalendar";
import { Join_3 } from "./pages/login/Join_3";
import { Loading } from "./pages/startPage/Loading";
import { GuidePage } from "./pages/startPage/GuidePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      // 로딩/안내화면
      {
        path: "loading",
        element: <Loading />,
      },
      {
        path: "guide",
        element: <GuidePage />,

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
        path: "join_3",
        element: <Join_3 />,
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
        element: <ViewDetail />,
      },
      {
        path: ":detailId/review",
        element: <ShowReview />,
      },
      {
        path: "reviewwrite",
        element: <ReviewWrite />,
      },
      // 마이페이지
      {
        path: "my",
        element: <My />,
      },
      {
        path: "my/like",
        element: <MyLike />,
      },
      {
        path: "my/showcalendar",
        element: <ShowCalendar />,
      },
      {
        path: "my/write",
        element: <MyWrite />,
      },
      {
        path: "my/ticket",
        element: <Ticket />,
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
        element: <CoNotice />,
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