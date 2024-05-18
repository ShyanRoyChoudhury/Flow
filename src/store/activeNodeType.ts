import { Node } from "reactflow";
import { atom } from "recoil";

const activeNodeType = atom<Node | null>({
    key:'activeNodeType',
    default: null
});

export default activeNodeType;