import { useState } from "react";
import { Props } from "../../utils/helper";
import PaginationCSS from "./pagination.module.css";
interface PaginationProps extends Props {
  onPrev?: () => void;
  onNext?: () => void;
  pages: number;
  children?: never;
  currentPage?: number;
  onCustomPageSubmit?: () => void;
}

const Pagination = (props: PaginationProps) => {
  const [currentPageInput, setCurrentPageInput] = useState(() => {
    if (!props.currentPage) return 1;
    if (props.currentPage < 1) return 1;
    if (props.currentPage > props.pages) return props.pages;
    return props.currentPage;
  });

  const handleChange = (e: any) => {
    if (e.target.value < 0) setCurrentPageInput(1);
    else if (e.target.value > props.pages) setCurrentPageInput(props.pages);
    else setCurrentPageInput(e.target.value);
  };

  const handleBlur = () => currentPageInput < 1 && setCurrentPageInput(1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (currentPageInput < 1) setCurrentPageInput(1);
    props.onCustomPageSubmit && props.onCustomPageSubmit();
  };

  const handlePrev = () => {
    setCurrentPageInput(currentPageInput - 1);
    props.onPrev && props.onPrev();
  };

  const handleNext = () => {
    setCurrentPageInput(+currentPageInput + 1);
    props.onNext && props.onNext();
  };

  return (
    <div className={PaginationCSS.pagination}>
      <button disabled={currentPageInput <= 1} onClick={handlePrev}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg> */}
        &#xf054;
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={currentPageInput}
          disabled={!props.onCustomPageSubmit && true}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </form>
      <span>/</span>
      <span>{props.pages}</span>
      <button disabled={currentPageInput === props.pages} onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
