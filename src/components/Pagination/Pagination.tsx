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
        <i className="fa-solid fa-chevron-left" />
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
        <i className="fa-solid fa-chevron-right" />
      </button>
    </div>
  );
};

export default Pagination;
