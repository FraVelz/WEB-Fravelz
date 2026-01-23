export default function Parrafo({ className = "", children }) {
    return (
        <p className={`
        wrap-break-word
        min-w-0
        text-justify
        ${className}
        `}>
            {children}
        </p>
    );
}
