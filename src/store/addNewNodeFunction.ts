import { atom } from "recoil";

const addNewNodeFunction = atom({
    key: 'addNewNodeFunction',
    default: (nodeType)=> {}
})

export default addNewNodeFunction;