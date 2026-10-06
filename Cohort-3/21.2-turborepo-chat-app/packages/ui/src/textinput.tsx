interface PropType {
    placeholder: string;
};


export function TextInput({
    placeholder
}: PropType){
    return (
        <input placeholder={placeholder} style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            width: "100%",
            boxSizing: "border-box",
        }} type="text" />
    );
}