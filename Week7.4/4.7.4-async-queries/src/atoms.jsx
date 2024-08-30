import { atom, selector } from "recoil";
import axios from "axios";

// the default value for an atom needs to synchronous or IT CAN BE A SELECTOR WHICH CAN BE ASYNC
// introdunction of ~Asynchronous data queries~
// https://recoiljs.org/docs/guides/asynchronous-data-queries

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "netwoekAtomSelector",
        get: async () => {
            // await new Promise(r => setTimeout(r,5000)); // sleeps the thread for 5 sec 
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data;
        }    
    })
});


export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})