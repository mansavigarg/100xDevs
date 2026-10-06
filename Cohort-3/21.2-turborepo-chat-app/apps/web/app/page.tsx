import { TextInput } from "@repo/ui/textinput";

export default function Home() {
  return (
    <div style={{
        height: "5vh",
        width: "100vw",
        background: "black",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center"
    }}>
        <input type="text">
        </input>
        <button>Join Room</button>

        <div>
            <TextInput placeholder="Enter your name" />
        </div>
    </div>
  );
}
