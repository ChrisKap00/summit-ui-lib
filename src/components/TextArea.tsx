import React from "react";

interface TextAreaProps {
  autoResize?: boolean;
  placeholder?: string;
  minRows?: number;
  autoFocus?: boolean;
  theme?: string;
  hoverBg?: string;
  style?: object;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({
  autoResize,
  placeholder,
  minRows,
  autoFocus,
  theme,
  hoverBg,
  style,
  onChange,
}: TextAreaProps) => {
  return (
    <textarea
      className="summit-textarea-autoresize"
      style={{
        border: "none",
        fontFamily: "inherit",
        fontSize: "1rem",
        backgroundColor:
          theme === "dark"
            ? "rgba(255, 255, 255, 0.07)"
            : "rgba(0, 0, 0, 0.07)",
        borderRadius: "10px",
        padding: "0.5rem 1rem",
        boxSizing: "border-box",
        outline: "none",
        color: theme === "dark" ? "white" : "black",
        resize: "none",
        width: "100%",
        overflow: autoResize ? "none" : "auto",
        ...style,
      }}
      role="textbox"
      autoFocus={autoFocus}
      placeholder={placeholder || "Placeholder"}
      rows={(minRows || 0) < 1 ? 1 : minRows}
      onChange={
        autoResize
          ? (e) => {
              e.target.style.height = `calc(${(minRows || 1) * 18}px + 1rem)`;
              e.target.style.height = `${
                document.querySelector(".summit-textarea-autoresize")
                  ? document.querySelector(".summit-textarea-autoresize")
                      ?.scrollHeight
                  : `calc(${(minRows || 1) * 18}px`
              }px`;
              onChange?.(e);
            }
          : undefined
      }
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor =
          theme === "dark"
            ? hoverBg || "rgba(255, 255, 255, 0.15)"
            : hoverBg || "rgba(0, 0, 0, 0.17)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor =
          theme === "dark" ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.1)";
      }}
    ></textarea>
  );
};
