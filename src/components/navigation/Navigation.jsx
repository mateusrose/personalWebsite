"use client";
import React from "react";
import { BtnList } from "@/app/data";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";
import { ShowerHead } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5 } },
};

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();
  const desktop = size >= 1024;
  const tablet = size >= 768;

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex items-center justify-between relative animate-spin-slow hover:pause group"
            >
              {BtnList.map((btn, index) => {
                const angleRad = (angleIncrement * index * Math.PI) / 180;
                const radius = desktop ? 20 : tablet ? 30 : 40; // adjust this value as needed
                const x = `${radius * Math.cos(angleRad) - 2}vw`;
                const y = `${radius * Math.sin(angleRad)}vw`;
                return <NavButton key={btn.label} x={x} y={y} {...btn} />;
              })}
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-5 items-start xs:items-center justify-center relative group"
              >
                {BtnList.slice(0, BtnList.length / 2 ).map((btn, index) => {
                  return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                })}
              </motion.div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-5 items-end xs:items-center justify-center relative group"
              >
                {BtnList.slice(BtnList.length / 2 , BtnList.length).map(
                  (btn, index) => {
                    return (
                      <NavButton
                        key={btn.label}
                        x={0}
                        y={0}
                        {...btn}
                        lableDirection="left"
                      />
                    );
                  }
                )}
              </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
