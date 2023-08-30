// import React from "react";
// import * as S from "./style";
// import { Link, useParams } from "react-router-dom";

// export const HomeNav = () => {
//   const {pathname} = useParams();
//   // console.log(pathname);

//   return (
//     <S.HomeNavContainer>
//       <Link to="/">
//         {pathname && pathname === "" ? (
//           <S.FocusMenu>홈</S.FocusMenu>
//         ) : (
//           <div>홈</div>
//         )}
//       </Link>
//       <Link to="/community">
//         {pathname & (pathname === "community") ? (
//           <S.FocusMenu>커뮤니티</S.FocusMenu>
//         ) : (
//           <div>커뮤니티</div>
//         )}
//       </Link>
//       <Link to="/my">
//         {pathname & (pathname === "my") ? (
//           <S.FocusMenu>마이</S.FocusMenu>
//         ) : (
//           <div>마이</div>
//         )}
//       </Link>
//     </S.HomeNavContainer>
//   );
// };


import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./style";

export const HomeNav = () => {
  const location = useLocation();

  return (
    <S.HomeNavContainer>
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        홈
      </Link>
      <Link
        to="/community"
        className={location.pathname === "/community" ? "active" : ""}
      >
        커뮤니티
      </Link>
      <Link to="/my" className={location.pathname === "/my" ? "active" : ""}>
        마이
      </Link>
    </S.HomeNavContainer>
  );
};
