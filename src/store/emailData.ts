import { atom } from "recoil";
interface emailDataType{
    messageBody: string,
    subject: string
}
const emailData = atom<emailDataType | null>({
    key: 'emailData',
    default:null
})

export default emailData;