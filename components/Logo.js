import React, { useContext } from "react";
import { StateContext } from "../pages/_app";
import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
  const { state, dispatch } = useContext(StateContext);
  return (
    <Link href={"/"}  className={`font-bold tracking-tight mb-0 text-lg sm:text-xl transition-all duration-150 ease-in-out no-underline ${
          state.sidebarOpen
            ? "text-white hover:text-white"
            : "text-dark-900 dark:text-white"
        }`}
      >
        DDOX
        <span
          className={`transition-all duration-150 ease-in-out ${
            state.sidebarOpen ? "text-brand-alt" : "text-brand-alt"
          }`}
        >
          
        </span>
    </Link>
  );
};

export default Logo;
