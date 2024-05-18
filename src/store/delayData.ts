import { atom } from "recoil";

interface delayDataProps {
    waitTime: string;
    waitTypeSelected: string | null;
}

const delayData = atom<delayDataProps>({
    key: 'delayData',
    default: {
        waitTime: '',
        waitTypeSelected: null,
    },
});

export default delayData;
