/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { ReactComponent as ArrowRight } from "../assets/svgs/arrow-right.svg";
import useWindowSize from "../hooks/useWindowSize";

const Slider = ({ children, className, page, setPage }) => {
  const { width } = useWindowSize();

  const slider = useRef();
  const prevButton = useRef();
  const nextButton = useRef();

  const nextLimit =
    (slider.current?.scrollWidth / slider.current?.clientWidth).toFixed() - 1;

  let timeout = null;
  
  function handleWheel() {
    timeout !== null && clearTimeout(timeout);
    timeout = setTimeout(() => {
      const currentPage = parseInt(
        (slider.current.scrollLeft / slider.current.clientWidth).toFixed()
      );

      currentPage === 0 && (slider.current.scrollLeft = 0);
      currentPage === page ? slidePlacer() : setPage(parseInt(currentPage));
    }, 400);
  }

  function slidePlacer() {
    slider.current.scrollLeft = slider.current.clientWidth * page;
  }

  useEffect(() => {
    slidePlacer();
  }, [page, width]);

  function toggleVisibiltyOfButtons() {
    nextButton.current.classList.toggle("hidden");
    prevButton.current.classList.toggle("hidden");
  }

  return (
    <div
      className="relative w-full"
      onMouseEnter={toggleVisibiltyOfButtons}
      onMouseLeave={toggleVisibiltyOfButtons}
    >
      <button
        className="w-8 h-8 bg-[rgba(255,255,255,.9)] hidden disabled:hidden flex items-center justify-center rounded-full absolute left-3 top-1/2 -translate-y-1/2 hover:scale-[1.04] hover:bg-white border border-[rgba(0,0,0,.08)] shadow-[0_0_0_1px_transparent,0_0_0_4px_transparent,0_2px_4px_#0000002e]"
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
        ref={prevButton}
      >
        <ArrowRight strokeWidth={4} className="rotate-180" />
      </button>
      <div
        ref={slider}
        onScroll={handleWheel}
        className={
          `flex overflow-x-scroll scroll-hidden whitespace-nowrap w-full ` + className
        }
      >
        {children}
      </div>
      <button
        className="w-8 h-8 bg-[rgba(255,255,255,.9)] hidden disabled:hidden flex items-center justify-center rounded-full absolute right-3 top-1/2 -translate-y-1/2 hover:scale-[1.04] hover:bg-white border border-[rgba(0,0,0,.08)] shadow-[0_0_0_1px_transparent,0_0_0_4px_transparent,0_2px_4px_#0000002e]"
        onClick={() => setPage(page + 1)}
        disabled={page === nextLimit}
        ref={nextButton}
      >
        <ArrowRight strokeWidth={4} />
      </button>
    </div>
  );
};

export default Slider;
