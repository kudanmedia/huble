import React, { useRef, useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Label from '../atoms/Label';

const CustomCarousel = ({ items }) => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const currentSlide = carouselRef.current.state.currentSlide;
      setActiveSlide(currentSlide);
    }
  }, [carouselRef.current]);

  const handleAfterSlide = () => {
    setActiveSlide((activeSlide + 1) % items.length)
  };

  const customPrevious = () => {
    if (carouselRef.current) {
      const currentSlide = carouselRef.current.state.currentSlide;
      const previousSlide = currentSlide - 1 >= 0 ? currentSlide - 1 : 0;
      carouselRef.current.goToSlide(previousSlide);
      setActiveSlide(previousSlide);
    }
  };

  const customNext = () => {
    if (carouselRef.current) {
      const currentSlide = carouselRef.current.state.currentSlide;
      const totalSlides = items.length;
      const nextSlide = (currentSlide + 1) % totalSlides;
      carouselRef.current.goToSlide(nextSlide);
      if (nextSlide === items.length) {
        setActiveSlide(0);
      } else {
        setActiveSlide(nextSlide);
      }
    }
  };
  
  const renderCustomDots = () => {
    return items.map((_, index) => (
      <span
        key={index}
        className={`custom-dot ${index === activeSlide ? 'custom-dot-active' : ''}`}
        onClick={() => {
          carouselRef.current.goToSlide(index);
          setActiveSlide(index);
        }}
      >
        {items[index].year}
      </span>
    ));
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="carousel-container bg-black">
      <Carousel
        ref={carouselRef}
        swipeable={true}
        slidesToSlide={1}
        draggable={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        arrows={false}
        keyBoardControl={true}
        responsive={responsive}
        renderDotsOutside={true}
        beforeChange={(oldIndex, newIndex) => {
          setActiveSlide(newIndex);
        }}
        containerClass="carousel"
      >
        {items.map((item, index) => (
          <div className={`carousel-item ${index === activeSlide ? 'custom-dot-active' : ''}`} key={index}>
            <img src={item.image} alt={item.description} />
            <h2>{item.description}</h2>
            <p>{item.year}</p>
          </div>
        ))}
      </Carousel>
      <div class="flex">
      <div class="grow text-center my-4">
      <div className="custom-dots-container flex gap-x-2 text-white">{renderCustomDots()}</div>
      </div>
      <div class="lg:flex gap-x-2 my-4 float-right">
        <button className="bg-story text-white rounded-full custom-button hover:bg-white hover:text-story" onClick={customPrevious}>
        <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="bg-story text-white rounded-full custom-button hover:bg-white hover:text-story" onClick={customNext}>
        <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
    </div>
  );
};

export default CustomCarousel;
