"use client";
import { SiInstagram, SiWhatsapp, SiGmail } from "react-icons/si";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  scaleIn,
} from "@/components/animations/motion";
import { WaitListForm } from "./WaitlistForm";

export default function Footer() {
  return (
    <motion.footer
      className="w-full relative overflow-hidden"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="w-full px-4 lg:pl-[145px] max-w-[1440px] mx-auto"
        variants={fadeInUp}
      >
        <p className="flex items-center border-b mt-[166px] gap-1 pb-2 justify-center text-base font-medium text-[#00FF11] lg:text-2xl lg:border-0 xl:font-semibold xl:text-[50px] xl:justify-start">
          <Image
            src="/images/logo.svg"
            alt="Logo Icon"
            width={100}
            height={100}
            className="w-[15.4px] h-[19.25px] xl:hidden"
          />
          Be the first to know when we launch.
        </p>
      </motion.div>

      <WaitListForm />

      <motion.div
        className="flex flex-col gap-5 mt-[91px] bg-[url('/images/footer-bg-img.svg')] bg-cover bg-no-repeat bg-center-bottom-[20rem] right-0 w-full h-[214px] xl:h-[653px] xl:pl-[145px]"
        variants={fadeInUp}
      >
        <motion.div className="w-full px-4" variants={fadeInUp}>
          <p className="flex items-center border-b gap-1 pb-2 text-center text-base font-medium text-[#00FF11] pt-4 lg:text-2xl lg:border-none xl:text-[50px]">
            <Image
              src="/images/logo.svg"
              alt="Logo Icon"
              width={100}
              height={100}
              className="w-[15.4px] h-[19.25px] lg:hidden"
            />
            Get in touch.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-4 lg:gap-8 text-2xl px-4 *:xl:h-[62px] *:xl:w-[62px]"
          variants={scaleIn}
        >
          <SiInstagram />
          <SiWhatsapp />
          <SiGmail />
        </motion.div>
        <motion.p
          className="font-extrabold text-[40px] leading-[66px] flex items-center absolute -bottom-4 xl:-bottom-16 right-0 xl:text-[160px]"
          variants={fadeIn}
        >
          <Image
            src="/images/logo.svg"
            alt="Logo Image"
            width={100}
            height={100}
            className="w-[29.15px] h-[36.44px] xl:h-[263px] xl:w-[263px]"
          />
          RoomRadar
        </motion.p>
      </motion.div>
    </motion.footer>
  );
}
