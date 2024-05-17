import { atom } from "recoil";

const isModalOpen = atom<boolean>({
    key: 'isModalOpen',
    default: false
})

export default isModalOpen;