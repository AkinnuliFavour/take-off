"use client";

import { motion } from "framer-motion";
import {
  containerVariants,
  fadeInUp,
  fadeIn,
  scaleIn,
} from "@/components/animations/motion";
import Image from "next/image";

export default function Header() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.querySelector("footer");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="bg-[url('/images/header-bg.svg')] bg-center bg-cover bg-no-repeat h-screen flex flex-col relative lg:p-0 p-8 lg:mb-[578px] mb-8">
      <div className="w-full max-w-[1440px]">
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
            className="font-bold lg:text-[85px] text-[32px] flex-col lg:mt-[400px] lg:leading-[92px] leading-[35px] mt-[321px]"
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
              onClick={scrollToWaitlist}
            >
              Join Waitlist
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
