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
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.70725 10.2933C7.09825 10.6842 7.09825 11.3162 6.70725 11.7072C6.31625 12.0982 5.68425 12.0982 5.29325 11.7072L0.29325 6.70725C-0.09775 6.31625 -0.09775 5.68425 0.29325 5.29325L5.29325 0.29325C5.68425 -0.09775 6.31625 -0.09775 6.70725 0.29325C7.09825 0.68425 7.09825 1.31625 6.70725 1.70725L2.41425 6.00025L6.70725 10.2933Z" fill="#475569" />
        </svg>
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
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.293253 10.2933C-0.0977464 10.6842 -0.0977464 11.3162 0.293253 11.7072C0.684253 12.0982 1.31625 12.0982 1.70725 11.7072L6.70725 6.70725C7.09825 6.31625 7.09825 5.68425 6.70725 5.29325L1.70725 0.29325C1.31625 -0.09775 0.684253 -0.09775 0.293253 0.29325C-0.0977464 0.68425 -0.0977464 1.31625 0.293253 1.70725L4.58625 6.00025L0.293253 10.2933Z" fill="#475569" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
