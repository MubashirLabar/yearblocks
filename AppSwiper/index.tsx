import { Children, useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function AppSwiper({
  children,
  slidesPerView,
  showPagination = false,
  showNavigation = false,
  ...rest
}: {
  children: React.ReactNode;
  slidesPerView: number;
  showPagination?: boolean;
  showNavigation?: boolean;
}) {
  type Swiper = any;
  const swiperRef = useRef<Swiper | null>(null);
  const slidesLength = Children.count(children) as number;
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handlePaginationClick = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <>
      <Swiper
        className="w-full flex items-center relative"
        ref={swiperRef}
        slidesPerView={slidesPerView}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={handleSlideChange}
        {...rest}
      >
        {Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Custom Pagination */}
      {showPagination && slidesLength - (slidesPerView - 1) !== 1 ? (
        <div className="absolute left-0 right-0 -bottom-12 flex justify-center">
          {[...Array(slidesLength - (slidesPerView - 1))].map((_, index) => (
            <div
              key={index}
              className={`w-9 2xl:w-10 h-2.5 2xl:h-3 rounded-md mx-1 cursor-pointer ${
                index === activeSlide ? "bg-white" : "bg-grey"
              }`}
              onClick={() => handlePaginationClick(index)}
            ></div>
          ))}
        </div>
      ) : null}

      {/* Swiper Custom Navigate Buttons */}
      {showNavigation && slidesLength - (slidesPerView - 1) !== 1 ? (
        <div className="absolute left-0 right-0 hidden xl:flex items-center">
          <button
            className="absolute -left-10 2xl:-left-16 disabled:opacity-70 disabled:cursor-not-allowed"
            onClick={handlePrev}
            disabled={activeSlide === 0}
          >
            <svg
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 2xl:h-[60px] w-12 2xl:w-[60px]"
            >
              <g clip-path="url(#clip0_11131_194413)">
                <path
                  d="M30 60C13.4588 60 0 46.5412 0 30C0 13.4588 13.4588 0 30 0C46.5412 0 60 13.4588 60 30C60 46.5412 46.5412 60 30 60ZM30 3.75C15.525 3.75 3.75 15.525 3.75 30C3.75 44.475 15.525 56.25 30 56.25C44.475 56.25 56.25 44.475 56.25 30C56.25 15.525 44.475 3.75 30 3.75ZM43.125 31.875H21.4012L25.7006 36.1744C26.4338 36.9075 26.4338 38.0925 25.7006 38.8256C25.335 39.1912 24.855 39.375 24.375 39.375C23.895 39.375 23.415 39.1912 23.0494 38.8256L15.5494 31.3256C15.3769 31.1531 15.24 30.9469 15.1444 30.7162C14.955 30.2587 14.955 29.7413 15.1444 29.2838C15.24 29.0531 15.3769 28.8469 15.5494 28.6744L23.0494 21.1744C23.7825 20.4412 24.9675 20.4412 25.7006 21.1744C26.4338 21.9075 26.4338 23.0925 25.7006 23.8256L21.4012 28.125H43.125C44.16 28.125 45 28.965 45 30C45 31.035 44.16 31.875 43.125 31.875Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_11131_194413">
                  <rect fill="white" className="h-[60px] w-[60px]" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button
            className="absolute -right-10 2xl:-right-16 disabled:opacity-70 disabled:cursor-not-allowed"
            onClick={handleNext}
            disabled={activeSlide === slidesLength - slidesPerView}
          >
            <svg
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 2xl:h-[60px] w-12 2xl:w-[60px]"
            >
              <g clip-path="url(#clip0_11131_194411)">
                <path
                  d="M30 -2.62268e-06C46.5413 -1.1766e-06 60 13.4588 60 30C60 46.5412 46.5412 60 30 60C13.4588 60 1.1766e-06 46.5412 2.62268e-06 30C4.06877e-06 13.4587 13.4588 -4.06877e-06 30 -2.62268e-06ZM30 56.25C44.475 56.25 56.25 44.475 56.25 30C56.25 15.525 44.475 3.75 30 3.75C15.525 3.75 3.75 15.525 3.75 30C3.75 44.475 15.525 56.25 30 56.25ZM16.875 28.125L38.5988 28.125L34.2994 23.8256C33.5663 23.0925 33.5663 21.9075 34.2994 21.1744C34.665 20.8087 35.145 20.625 35.625 20.625C36.105 20.625 36.585 20.8087 36.9506 21.1744L44.4506 28.6744C44.6231 28.8469 44.76 29.0531 44.8556 29.2837C45.045 29.7412 45.045 30.2587 44.8556 30.7162C44.76 30.9469 44.6231 31.1531 44.4506 31.3256L36.9506 38.8256C36.2175 39.5587 35.0325 39.5587 34.2994 38.8256C33.5663 38.0925 33.5663 36.9075 34.2994 36.1744L38.5988 31.875L16.875 31.875C15.84 31.875 15 31.035 15 30C15 28.965 15.84 28.125 16.875 28.125Z"
                  fill="white"
                />
              </g>
              <path
                d="M30 60C13.4588 60 0 46.5412 0 30C0 13.4588 13.4588 0 30 0C46.5412 0 60 13.4588 60 30C60 46.5412 46.5412 60 30 60ZM30 3.75C15.525 3.75 3.75 15.525 3.75 30C3.75 44.475 15.525 56.25 30 56.25C44.475 56.25 56.25 44.475 56.25 30C56.25 15.525 44.475 3.75 30 3.75Z"
                fill="white"
              />
              <defs>
                <clipPath id="clip0_11131_194411">
                  <rect
                    fill="white"
                    transform="translate(60 60) rotate(-180)"
                    className="h-[60px] w-[60px]"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      ) : null}
    </>
  );
}

export default AppSwiper;
