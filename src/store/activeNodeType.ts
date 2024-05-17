import { atom } from "recoil";

const activeNodeType = atom<string | undefined>({
    key:'activeNodeType',
    default: ''
});

export default activeNodeType;