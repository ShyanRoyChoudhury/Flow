import { atom } from "recoil";

interface modalBlockSelectedProps{
        selected: boolean,
        blockType: string | 'null'
}

export const modalBlockSelected = atom<modalBlockSelectedProps>({
    key:'modalBlockSelected',
    default: {
        selected: false,
        blockType: 'null'
    }
})
export default modalBlockSelected;