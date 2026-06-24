import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" text-lg w-screen h-screen flex items-center justify-center">
        <div>
            Todo App
            <br />
            <Link className=" border m-2" href="/signin">Sign In</Link> 
            <br />
            <Link className=" border m-2" href="/signup">Sign Up</Link> 
        </div>
    </div>
  );
}
