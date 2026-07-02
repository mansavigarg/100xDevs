//@ Even though this page is a client component, it is not hydrated because it is not used in a server component. This is a bad pattern and should be avoided.
// Here the server will return some html and also some javascript logic to update the state of the component. 

// 'use client';
// import { useState } from "react";

// export default function User() {
//     const [count, setCount] = useState(0);
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//           Bad Page
//           <br />
//           <button onClick={() => setCount(count + 1)}>Count: {count}</button>
//         </h1>
//       </main>
//     </div>
//   );
// }

import { Button } from "@/app/components/Button";
import { useState } from "react";

export default function User() {
    const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Bad Page
          <br />
          <Button />
        </h1>
      </main>
    </div>
  );
}