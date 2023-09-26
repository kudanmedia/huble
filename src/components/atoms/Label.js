import React from 'react';
import { cva } from "class-variance-authority";

const label = cva("label", {
  variants: {
    intent: {
      subHeading: ["text-base", "font-semibold", "leading-7", "text-primary"],
      heading: ["text-4xl", "font-normal", "tracking-tight", "text-white", "sm:text-6xl"],
      description: ["text-base", "leading-8", "text-white"],
    },
  },
  defaultVariants: {
    intent: "description",
  },
});

const Label = ({ text, intent }) => {
  return <label className={label({ intent })}>{text}</label>;
};

export default Label;