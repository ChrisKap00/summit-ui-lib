import React from "react";

interface TextAreaProps {
  autoResize?: boolean;
  placeholder?: string;
  minRows?: number;
  autoFocus?: boolean;
  theme?: string;
  hoverBg?: string;
  style?: object;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function randomString(length: number, chars: string) {
  let result = "";
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

export const TextArea = ({
  autoResize = true,
  placeholder,
  minRows = 1,
  autoFocus,
  theme,
  hoverBg,
  style,
  value,
  onChange,
}: TextAreaProps) => {
  const randomClassName = randomString(
    20,
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );

  return (
    <textarea
      className={`summit-textarea-autoresize-${randomClassName}`}
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
      placeholder={placeholder}
      rows={minRows < 1 ? 1 : minRows}
      value={value}
      onChange={(e) => {
        if (autoResize) {
          e.target.style.height = `calc(${minRows * 18}px + 1rem)`;
          e.target.style.height = `${
            document.querySelector(
              `.summit-textarea-autoresize-${randomClassName}`
            )
              ? document.querySelector(
                  `.summit-textarea-autoresize-${randomClassName}`
                )?.scrollHeight
              : `calc(${minRows * 18})px`
          }px`;
        }
        if (onChange) {
          onChange(e);
        }
      }}
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
