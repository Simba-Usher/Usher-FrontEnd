import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist(); //로컬스토리지에 정보 저장

export const accessTokenState = atom({
  key: "accessTokenState",
  default: null,  
  effects_UNSTABLE: [persistAtom], // recoil-persist를 적용하여 영구 저장
});
