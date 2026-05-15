import { atom } from "recoil";

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