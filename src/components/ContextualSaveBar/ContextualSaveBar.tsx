import React, { useEffect, useState } from "react";
import CSBarCSS from "./contextualSaveBar.module.css";
import { Props } from "../../utils/helper";

interface CSBarProps extends Props {
  title?: string;
  show?: boolean;
  onSave?: () => void;
  onDiscard?: () => void;
}

const ContextualSaveBar = (props: CSBarProps) => {

  const [show, setShow] = useState(props.show);

  useEffect(() => {
    setShow(props.show)
  }, [props.show])

  return (
    (show ?
      <div
        className={CSBarCSS.bar + " " + CSBarCSS[show ? "bar--show" : ""]}
        style={{ ...props.style }}
      >
        <div className={CSBarCSS.container}>
          <div className={CSBarCSS.title}>{props.title ?? "Unsaved Changes"}</div>
          <button
            className={CSBarCSS.discard}
            onClick={() => {
              setShow(false);
              props.onDiscard && props.onDiscard();
            }}
          >
            Discard
          </button>
          <button
            className={CSBarCSS.save}
            onClick={() => {
              setShow(false);
              props.onSave && props.onSave();
            }}
          >
            Save
          </button>
        </div>
      </div> : <></>)
  );
};

export default ContextualSaveBar;
