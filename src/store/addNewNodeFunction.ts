
import { atom } from "recoil";

const addNewNodeFunction = atom({
    key: 'addNewNodeFunction',
    // eslint-disable-next-line 
    default: (_nodeType: string)=> {}
})

export default addNewNodeFunction;