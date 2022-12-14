import textFieldCss from "./TextField.module.css";
import { TextFieldProps } from "./TextFieldProps";

const TextField: React.FC<TextFieldProps> = (textfieldProps) => {
    return (
        <>
            {textfieldProps.label ? (
                <label className={textFieldCss.label} htmlFor="textField">
                    {textfieldProps.label}
                </label>
            ) : null}
            <div
                className={
                    textFieldCss.textfield +
                    " " +
                    textFieldCss[
                    textfieldProps.medium
                        ? "textfield--medium"
                        : textfieldProps.large
                            ? "textfield--large"
                            : "textfield--small"
                    ]
                }
                style={{ ...textfieldProps.styling }}
            >
                <input
                    type="text"
                    id="textField"
                    value={textfieldProps.input}
                    placeholder={textfieldProps.placeholder}
                    onChange={textfieldProps.onAction}
                />
            </div>
        </>
    );
};

export default TextField;
