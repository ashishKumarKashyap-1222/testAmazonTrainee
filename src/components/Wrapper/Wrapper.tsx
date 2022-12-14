import WrapperCss from "./Wrapper.module.css";
import { WrapperProps } from "./WrapperProps";

const Wrapper: React.FC<WrapperProps> = (WrapperProps) => {
  return (
    <div
      className={
        WrapperCss.wrapper +
        " " +
        WrapperCss[WrapperProps.sectioned ? "wrapper--sectioned" : ""]
      }
      style={{ ...WrapperProps.styling }}
    >
      {WrapperProps.title ? (
        <h2 className={WrapperCss.title}>{WrapperProps.title}</h2>
      ) : (
        ""
      )}
      <div className={WrapperCss.container}>{WrapperProps.children}</div>
    </div>
  );
};

export default Wrapper;
