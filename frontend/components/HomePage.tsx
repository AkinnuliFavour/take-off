"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeInUp,
  fadeIn,
  scaleIn,
} from "@/components/animations/motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="w-full h-full">
      <header className="bg-[url('/images/header-bg.svg')] bg-center bg-cover bg-no-repeat h-screen flex flex-col relative lg:p-0 p-8 lg:mb-[578px] mb-8">
        <motion.h1
          className="font-semibold text-xl lg:text-3xl absolute top-8 left-8 lg:left-[92px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/images/logo.svg"
            alt="Room Radar Logo"
            width={32}
            height={41}
            className="inline-block mr-2"
          />
          <span>Room</span>
          <span className="text-[#00FF11]">Radar</span>
        </motion.h1>
        <motion.div
          className="flex flex-col gap-4.5 w-full lg:pl-[92px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="font-bold lg:text-[85px] text-[32px] flex-col lg:mt-[231px] lg:leading-[92px] leading-[35px] mt-[321px]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Find Your Perfect <br /> Off-Campus <br /> Home
          </motion.p>
          <motion.p
            className="italic lg:text-3xl text-sm"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Safe, Affordable Student Housing - Without Stress.
          </motion.p>
          <motion.div
            className="w-full flex items-start"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.button
              className="bg-[#00FF11] rounded-[10px] lg:text-[39px] font-bold text-base py-3 px-6 hover:opacity-90 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              variants={scaleIn}
            >
              Join Waitlist
            </motion.button>
          </motion.div>
        </motion.div>
      </header>

      <motion.section
        className="w-full p-8 lg:pl-[92px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col">
          <motion.p
            className="font-bold text-lg mb-10 lg:text-[40px]"
            variants={fadeInUp}
          >
            Wait
          </motion.p>
          <motion.p
            className="font-bold text-2xl lg:text-[40px]"
            variants={fadeInUp}
          >
            A <span className="text-[#00FF11]">Perfect</span> Off Campus Home??
          </motion.p>
          <motion.p className="font-bold" variants={fadeInUp}>
            <span className="text-xl lg:text-[45px]">Without</span>{" "}
            <span className="text-[#FFC403] text-[32px] lg:text-[90px]">
              Stress??!
            </span>
          </motion.p>
        </div>
      </motion.section>

      <motion.p
        className="mt-[206px] lg:mt-[108px] text-center font-bold text-base lg:text-[40px] mb-[452px] lg:mb-[426px]"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Is that possible
      </motion.p>

      <motion.section
        className="p-8 lg:pl-[92px] max-w-[1390px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="p-2 flex flex-col gap-4">
          <motion.p
            className="text-base font-medium lg:text-3xl"
            variants={fadeInUp}
          >
            <span className="text-[#00FF11] font-semibold">Off-Campus</span>{" "}
            life can feel like a maze of{" "}
            <span className="text-[#FFC403] font-semibold">scams</span>,{" "}
            <span className="text-[#FFC403] font-semibold">long walks</span>,
            and{" "}
            <span className="text-[#FFC403] font-semibold">hidden fees</span>.
            All <span className="text-[#00FF11] font-semibold">Off-K</span> kids
            all have one or two stories to tell, and some are worse than others.
          </motion.p>
          <motion.p className="font-medium lg:text-3xl" variants={fadeInUp}>
            Maybe you too have your own story to tell, But think you’ve seen it
            all?{" "}
          </motion.p>
          <motion.p className="font-medium lg:text-3xl" variants={fadeInUp}>
            Meet -{" "}
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}
