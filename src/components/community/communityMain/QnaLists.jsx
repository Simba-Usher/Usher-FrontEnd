// QnaLists.jsx

import React from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';

export const QnaLists = ({ compost }) => {
    const navigate = useNavigate();

    // Detail 페이지 불러오기
    // const [detailData, setDetailData] = useState();
    // console.log(detailData);

    // const fetchCoDetailData = async () => {
    //     try {
    //         const respose = await axiosInstance.get(`/api/composts/${id}`)
    //         setDetailData(respose.data.results);
    //         console.log(detailData);
    //     } catch (error) {
    //         console.log("각 id에 해당하는 디테일 페이지 가져오는 중 에러 발생", error);
    //     }
    // }
    // useEffect(() => {
    //     fetchCoDetailData();
    // })

    return (
        <>
            <S.ComListsWrap onClick={() => navigate(`/community/${compost.id}`)}>
                <S.QnaSec>
                    <S.Sec1Title>Q. {compost.title}</S.Sec1Title>
                    <S.Sec2Content>
                        {/* 본문 글자수 자르기 해야될듯 */}
                        {compost.content}
                    </S.Sec2Content>
                    <S.Sec3>
                        <img src="/views.png" alt="views" />
                        <p>{compost.views}</p>
                        <img src="/likes.png" alt="likes" />
                        <p>{compost.like_cnt}</p>
                        <p className="comments">답변</p>
                        <p className="comments">{compost.comcomments_cnt}</p>
                    </S.Sec3>
                </S.QnaSec>
            </S.ComListsWrap>
        </>
    )
}