import { atom, selector } from "recoil";

// here what is happening is that for some time (while the async fetch is happening) we see the default values of the notification i.e. network: 0, jobs: 0, messaging: 0, notifications: 0
// so this is a disaster
// somehow we need that async call to happen inside the atom so that when the fetch is completed only then it renders

export const notifications = atom({
    key: "networkAtom",
    default: {
        network: 0, 
        jobs: 0, 
        messaging: 0, 
        notifications: 0
    }
});

// the default value for an atom needs to synchronous or IT CAN BE A SELECTOR WHICH CAN BE ASYNC
// introdunction of ~Asynchronous data queries~

        // this syntax is wrong~

        // export const notifications = atom({
        //     key: "networkAtom",
        //     default: async () => {
        //         const res = await axios.get("https://sum-server.100xdevs.com/notifications")
        //         return res.data;
        //     }
        // });

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