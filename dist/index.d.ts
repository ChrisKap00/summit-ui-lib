import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

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
declare const TextArea: ({ autoResize, placeholder, minRows, autoFocus, theme, hoverBg, style, onChange, }: TextAreaProps) => react_jsx_runtime.JSX.Element;

export { TextArea };
