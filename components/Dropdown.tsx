import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Icons from "icons";

export const Dropdown = () => {
  const [shown, setShown] = useState(false);
  const [option, setOption] = useState("Crab Prices");

  const showMenu = {
    enter: {
      opacity: 1,
      y: 0,
      display: "block",
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <motion.button
      className="flex flex-grow w-5/6 justify-between items-center bg-dropdown rounded border-solid border-[1px] border-bfilters m-[-1rem] z-20 px-4 py-4"
      onClick={() => setShown((state) => !state)}
    >
      <span className="cursor-pointer">{option}</span>
      <Image src={Icons.chevronDown} alt="Chevron down icon" className="pr-4" />
      <motion.ul
        variants={showMenu}
        initial="exit"
        animate={shown ? "enter" : "exit"}
        className="absolute flex flex-grow mt-52 w-5/6 justify-between items-center bg-dropdown rounded border-solid border-[1px] border-bfilters m-[-1rem] z-20 p-3"
      >
        {["Profile", "Economy", "Population", "Crab Prices"].map((item) => (
          <motion.li
            onClick={() => setOption(item)}
            key={item}
            className="cursor-pointer p-1 text-white text-left"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.button>
  );
};
