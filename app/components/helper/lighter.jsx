"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "../../../utils/cn";

export const Lighter = ({ children, identifier, className, move }) => {
  const options = {
    threshold: 0,
  };
  const [ref, inView] = useInView(options);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (inView) setActive(true);
  }, [inView]);

  useEffect(() => {
    const CONTAINER = document.querySelector(
      `.lighter-container-${identifier}`
    );
    const TAIL = document.querySelector(`.lighter-tail-${identifier}`);
    const CONFIG = {
      width: 150, // 150px
      scale: 2.5, // 300px when moving, 150px when stopped
      fromLeft: -20, // vw
      fromRight: 20, // vw
    };

    const MOVE_RIGHT_STYLE = () => {
      TAIL.style.setProperty("--width", CONFIG.width);
      TAIL.style.setProperty("--scale", CONFIG.scale);
      CONTAINER.style.setProperty("--from", CONFIG.fromLeft);
    };

    const MOVE_LEFT_STYLE = () => {
      TAIL.style.setProperty("--width", CONFIG.width);
      TAIL.style.setProperty("--scale", CONFIG.scale);
      CONTAINER.style.setProperty("--from", CONFIG.fromRight);
    };

    if (move === "left") MOVE_LEFT_STYLE();
    else MOVE_RIGHT_STYLE();
  }, [identifier, move]);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 flex flex-row items-center cursor-default",
        `lighter-container-${identifier} ligter-container`,
        active && "container-active",
        className
      )}
    >
      {move === "right" && (
        <div
          className={cn(
            `h-[2px] bg-gradient-to-r from-transparent to-white`,
            `lighter-tail-${identifier} lighter-tail`,
            active && "tail-active"
          )}
        />
      )}
      <div
        className={cn(
          "opacity-0 lighter-head bg-[#1a1443] w-fit h-fit text-white p-2 px-5 text-xl rounded-md shadow-lighter capitalize",
          active && "head-active"
        )}
      >
        {children}
      </div>

      {move === "left" && (
        <div
          className={cn(
            `h-[2px] bg-gradient-to-l from-transparent to-white`,
            `lighter-tail-${identifier} lighter-tail`,
            active && "tail-active"
          )}
        />
      )}
    </div>
  );
};

export const CenterLighter = ({ children, className }) => {
  const options = {
    threshold: 0,
  };
  const [ref, inView] = useInView(options);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (inView) setActive(true);
  }, [inView]);

  return (
    <div
      ref={ref}
      className={cn(`flex flex-row items-center cursor-default`, className)}
    >
      <div
        className={cn(
          "z-0 opacity-0 w-24 h-[2px] bg-gradient-to-r from-transparent to-white",
          active && "bubble-1"
        )}
      />
      <div
        className={cn(
          "z-[2] opacity-0 bg-[#1a1443] w-fit h-fit text-white p-2 px-5 text-xl rounded-md capitalize",
          active && "bubble-2 shadow-lighter"
        )}
      >
        {children}
      </div>

      <div
        className={cn(
          "z-0 opacity-0 w-24 h-[2px] bg-gradient-to-l from-transparent to-white",
          active && "bubble-1"
        )}
      />
    </div>
  );
};
