import { atom }  from 'recoil'

export const serverState = atom({
    key: 'serverState',
    default: false
})