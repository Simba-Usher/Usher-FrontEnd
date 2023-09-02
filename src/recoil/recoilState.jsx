import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist(); //로컬스토리지에 user 정보

export const accessTokenState = atom({
  key: "accessTokenState",
  default: null, // 초기 값은 null 또는 빈 문자열, 로그인되지 않았을 경우
  effects_UNSTABLE: [persistAtom], // recoil-persist를 적용하여 영구 저장
});
