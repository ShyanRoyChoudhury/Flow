import { atom } from "recoil";

const isEditModalOpen = atom<boolean>({
    key: 'isEditModalOpen',
    default: false
})

export default isEditModalOpen;