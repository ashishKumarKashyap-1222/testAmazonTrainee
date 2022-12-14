import { Props } from "../../utils/helper";
import ButtonCSS from "./button.module.css";

interface ButtonProps extends Props {
  variant?: "text" | "contained" | "outlined";
  status?: "info" | "error" | "success" | "warning";
  destructive?: true | null
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={
        ButtonCSS.btn +
        " " +
        ButtonCSS[props.variant ? `btn--${props.variant}` : ""] +
        " " +
        ButtonCSS[`btn--${props.variant}-${props.status ?? ""}`] +
        " " +
        ButtonCSS[props.destructive ? `btn--destructive` : '']
      }
      style={{ ...props.style }}
      onClick={() => { props.onClick && props.onClick() }}
    >
      {props.children}
    </button>
  );
};

export default Button;
