import React from 'react';
import { cva } from "class-variance-authority";

const button = cva("button", {
    variants: {
      intent: {
        primary: [
          "rounded-full", 
          "bg-primary",
           "text-sm", 
           "font-semibold", 
           "text-white", 
           "shadow-sm", 
           "hover:bg-primary/80", 
        ],
        secondary: [
          "rounded-full", 
           "text-sm", 
           "font-semibold", 
           "text-white", 
           "shadow-sm", 
           "hover:bg-primary/80",
           "outline", "outline-primary",
           "hover:text-black"
        ],
      },
      size: {
        small: ["py-2", "px-4"],
        medium: ["px-8", "py-4"],
      },
    },
    compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  });
  
  export default function ({ label, intent, size }) {
    return <button className={button({ intent, size })}>{label}</button>;
  };
