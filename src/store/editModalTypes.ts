import { atom } from "recoil";

type EditModalType = null | "editMode" | "addMode";

const editModalType = atom<EditModalType>({
    key: 'editModalType',
    default: null
})

export default editModalType;