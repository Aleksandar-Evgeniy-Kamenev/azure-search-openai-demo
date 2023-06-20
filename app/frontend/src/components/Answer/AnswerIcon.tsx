import { Sparkle28Filled } from "@fluentui/react-icons";

export const AnswerIcon = () => {
    // return <Sparkle28Filled primaryFill={"rgba(115, 118, 225, 1)"} aria-hidden="true" aria-label="Answer logo" />;
    return (
        <img
            src="resources/logo.png"
            alt="Chat logo"
            style={{ height: "28px", width: "28px", fill: "rgba(115, 118, 225, 1)" }}
            aria-hidden="true"
            aria-label="Chat logo"
        />
    );
};
