import textFieldCss from "./TextField.module.css";
interface TextFieldProps {
  input?: string | number;
  styling?: string | any;
  placeholder?: string;
  label?: string;
  width?: "medium" | "large" | null;
  onAction?: () => void;
}

const TextField = (textfieldProps: TextFieldProps) => {
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
            textfieldProps.width
              ? "textfield--" + textfieldProps.width
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
