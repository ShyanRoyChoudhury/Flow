import { atom } from "recoil";

interface modalSubBlockSelectedProps{
    title: string,
    description: string
}

export const modalSubBlockSelected = atom<modalSubBlockSelectedProps | null>({
    key: 'modalBlockSelect',
    default: null
})