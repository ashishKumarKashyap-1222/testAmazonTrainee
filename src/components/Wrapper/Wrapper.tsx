import WrapperCss from "./Wrapper.module.css";
interface WrapperProps {
  children: JSX.Element | JSX.Element[];
  sectioned?: true | null;
  title?: string;
  styling?: string | any;
  square?: boolean | null;
  outlined?: boolean | null;
  elevation?: "none" | 1 | 2 | 3 | 4;
}

const Wrapper = (WrapperProps: WrapperProps) => {
  return (
    <div
      className={
        WrapperCss.wrapper +
        " " +
        WrapperCss[WrapperProps.sectioned ? "wrapper--sectioned" : ""] +
        " " +
        WrapperCss[WrapperProps.square ? "wrapper--square" : ""] +
        " " +
        WrapperCss[WrapperProps.outlined ? "wrapper--outlined" : ""] +
        " " +
        WrapperCss[
          WrapperProps.elevation
            ? `wrapper--elevation-${WrapperProps.elevation}`
            : "wrapper--elevation-2"
        ]
      }
      style={{ ...WrapperProps.styling }}
    >
      {WrapperProps.title && (
        <h2 className={WrapperCss.title}>{WrapperProps.title}</h2>
      )}
      <div className={WrapperCss.container}>{WrapperProps.children}</div>
    </div>
  );
};

export default Wrapper;
