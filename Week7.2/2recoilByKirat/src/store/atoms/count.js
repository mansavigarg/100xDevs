import { createContext, useMemo } from "react";
import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});



export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom);
        return count % 2;
    }
});
// So basically, in that get function, behave the access to various atoms and can return the state which depends on these atoms by doing some logic





// Todo creation application with filtering logic
// todos, filter

// 2 inputs boxes (title , description) => store in atom
// button
// todos => atom
// filter (getting todos of gym by writing gym)
// selector ( the current set of todos)