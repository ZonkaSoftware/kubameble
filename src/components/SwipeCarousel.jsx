import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
// import img3 from "../img/3.jpg"

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = ({ banners }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  const imgs = banners;

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [imgIndex]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <header className="mt-10 md:mt-0">
      <div className="relative overflow-hidden container">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${imgIndex * 100}%`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="flex cursor-grab items-center active:cursor-grabbing"
        >
          <Images imgs={imgs} imgIndex={imgIndex} />
        </motion.div>

        <Dots imgIndex={imgIndex} imgs={imgs} setImgIndex={setImgIndex} />
      </div>
    </header>
  );
};

const Images = ({ imgIndex, imgs }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.img
            key={idx}
            src={imgSrc}
            height="50px"
            width="50px"
            animate={{
              scale: imgIndex === idx ? 1 : 0.9,
            }}
            loading="lazy"
            transition={SPRING_OPTIONS}
            className="aspect-video md:h-[60vh] w-full shrink-0 rounded-xl object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, imgs, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-end gap-4">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-main" : "bg-second"
            }`}
          />
        );
      })}
    </div>
  );
};
