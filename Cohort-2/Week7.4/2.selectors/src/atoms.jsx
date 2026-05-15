import { atom, selector } from "recoil";

export const myNetworkAtom = atom({
    key : "myNetworkAtom",
    default: 105
})
export const messagingAtom = atom({
    key : "messagingAtom",
    default: 0
})
export const jobsAtom = atom({
    key : "jobsAtom",
    default: 0
})
export const notificationAtom = atom({
    key : "notificationAtom",
    default: 12
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get : ({get}) => {
        const networkAtomCount = get(myNetworkAtom);
        const messagingAtomCount = get(messagingAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationAtomCount = get(notificationAtom);
        return networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;
    }
})