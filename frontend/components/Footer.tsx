"use client";
import { SiInstagram, SiWhatsapp, SiGmail } from "react-icons/si";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, scaleIn } from "./animations/motion";

export default function Footer() {
  return (
    <motion.footer
      className="w-full relative"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="w-full px-4 lg:pl-[145px] max-w-[1440px] mx-auto" variants={fadeInUp}>
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

      <motion.form
        className="max-w-[1440px] mx-auto space-y-8 lg:space-y-16 mt-[52px] w-full px-4 xl:px-[145px]"
        variants={fadeInUp}
      >
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            required
             className="peer block w-full border border-[#00FF11] bg-white px-4 py-3 xl:py-5 text-[12.5px] lg:text-2xl xl:text-2xl focus:outline-none focus:border-[#0EC530] transition-colors rounded-[7px] text-black"
            placeholder=" "
            autoComplete="off"
          />
          <label
            htmlFor="name"
           className="absolute left-4 top-1/2 -translate-y-1/2 text-[12.5px] pointer-events-none transition-all duration-200
                peer-focus:-top-6 peer-focus:text-lg xl:peer-focus-2xl peer-focus:text-[#00FF11]
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[#0EC530] peer-placeholder-shown:text-[12.5px] lg:peer-placeholder-shown:text-2xl xl:peer-placeholder-shown:text-[32.13px]
                peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[12.5px] peer-not-placeholder-shown:text-[#00FF11] peer-placeholder-shown:font-semibold"
          >
            Enter Name
          </label>
        </div>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            required
            className="peer block w-full border border-[#00FF11] bg-white px-4 py-3 xl:py-5 text-[12.5px] lg:text-2xl xl:text-2xl focus:outline-none focus:border-[#0EC530] transition-colors rounded-[7px] text-black"
            placeholder=" "
            autoComplete="off"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[12.5px] pointer-events-none transition-all duration-200
                peer-focus:-top-6 peer-focus:text-lg xl:peer-focus-2xl peer-focus:text-[#00FF11]
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[#0EC530] peer-placeholder-shown:text-[12.5px] lg:peer-placeholder-shown:text-2xl xl:peer-placeholder-shown:text-[32.13px]
                peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[12.5px] peer-not-placeholder-shown:text-[#00FF11] peer-placeholder-shown:font-semibold"
          >
            Email
          </label>
        </div>
        <motion.div
          className="w-full mx-auto flex items-center justify-center hover:cursor-pointer hover:opacity-90"
          variants={scaleIn}
        >
          <button className="bg-[#00FF11] font-bold text-base rounded-[10px] py-2 px-4 xl:text-[39px] lg:text-2xl cursor-pointer hover:opacity-90">
            Join Waitlist
          </button>
        </motion.div>
      </motion.form>

      <motion.div
        className="flex flex-col gap-5 mt-[91px] bg-[url('/images/footer-bg-img.svg')] bg-cover bg-no-repeat bg-center -bottom-[20rem] right-0 w-full h-[214px] xl:h-[653px] xl:pl-[145px]"
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

        <motion.div className="flex gap-4 lg:gap-8 text-2xl px-4 *:xl:h-[62px] *:xl:w-[62px]" variants={scaleIn}>
          <SiInstagram />
          <SiWhatsapp />
          <SiGmail />
        </motion.div>
        <motion.p
          className="font-extrabold text-[40px] leading-[66px] flex items-center absolute bottom-0 right-0 xl:text-[160px]"
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
