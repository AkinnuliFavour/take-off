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
import Header from "./Header";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="w-full h-full">
      <Header />

      <motion.section
        className="w-full p-8 lg:pl-[92px] max-w-[1440px] mx-auto"
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
        className="mt-[206px] lg:mt-[108px] text-center font-bold text-base lg:text-[40px] mb-[452px] lg:mb-[426px] max-w-[1440px] mx-auto"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Is that possible
      </motion.p>

      <Testimonials />

      <motion.p
        className="font-medium my-[169px] px-8 flex flex-col w-full text-base leading-12 lg:font-bold lg:text-[31px] lg:leading-[58px] lg:items-start lg:pl-[92px] lg:mt-[321px] lg:gap-5 mb-[356px] lg:mb-[944px] max-w-[1440px] mx-auto"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="text-left">
          So maybe your case isn&apos;t that bad.
        </span>
        <span className="text-left">
          But is all this{" "}
          <span className="font-semibold text-[#FFC403] lg:text-[40px]">
            stress
          </span>{" "}
          even <span className="lg:text-[40px]">necessary</span>?
        </span>
      </motion.p>

      <motion.section
        className="bg-[url('/images/mobile-map.webp')] bg-center bg-cover bg-no-repeat xl:hidden relative text-black w-full pt-[30rem]"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="p-4 w-full">
          <motion.div className="flex items-center gap-1" variants={fadeInUp}>
            <Image
              src="/images/logo.svg"
              alt="Logo Image"
              width={100}
              height={100}
              className="w-[64px] h-[81px]"
            />
            <h2 className="font-extrabold text-[#00FF11] leading-8">
              <span className="text-[45px]">Room</span>
              <br />
              <span className="text-[55px]">Radar</span>
            </h2>
          </motion.div>

          <div className="bg-[#3B3B3B] w-full h-px mt-[50px] mb-[34px]"></div>

          <motion.p
            className="mb-[90px] font-normal text-[23px]"
            variants={fadeInUp}
          >
            A <span className="text-[#00FF11] font-medium">smart,</span> student
            focused housing platform designed to eliminate the{" "}
            <span className="text-[#FFC403] font-medium">stress,</span> risk,
            and confusion that comes with finding off-Campus accomodation.
          </motion.p>

          <motion.div className="space-y-[50px]" variants={containerVariants}>
            <motion.div className="space-y-10" variants={fadeInUp}>
              <div className="w-full max-w-[700px] mx-auto">
                <Image
                  src="/images/for-student-illustration.svg"
                  alt="For Students Illustration"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-[22px]">For Students:</h3>
                <motion.ul
                  className="list-disc pl-6 text-[19px] font-normal space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.li variants={fadeInUp}>
                    <span className="font-medium text-[#00FF11]">Verified</span>{" "}
                    home listings only - no scams.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Smart filters (budget, amenities, distance to school)
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    In-app chat with{" "}
                    <span className="font-medium text-[#00FF11]">verified</span>{" "}
                    landlords
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Booking with deposit protection
                  </motion.li>
                  <motion.li variants={fadeInUp}>Pay securely online</motion.li>
                </motion.ul>
              </div>
            </motion.div>

            <motion.div className="space-y-10 mb-[53px]" variants={fadeInUp}>
              <div className="w-full max-w-[700px] mx-auto">
                <Image
                  src="/images/for-landlords-illustration.svg"
                  alt="For Landlords Illustration"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-[22px]">
                  For Landlords and Agents:
                </h3>
                <motion.ul
                  className="list-disc pl-6 text-[19px] font-normal space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.li variants={fadeInUp}>
                    Larger <span className="text-[#FFC403]">Reach</span> to
                    students
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Upload listings with photos and pricing
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Chat directly and manage transactions
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Build reputation with{" "}
                    <span className="text-[#FFC403]">reviews</span>
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Fill vacant rooms{" "}
                    <span className="text-[#FFC403]">faster</span>
                  </motion.li>
                </motion.ul>
              </div>
            </motion.div>
          </motion.div>

          <div className="mb-[196px]">
            <motion.div
              className="flex items-center gap-2 border-b py-4 border-px border-[#3B3B3B] mb-[37px]"
              variants={fadeInUp}
            >
              <Image
                src="/images/logo.svg"
                alt="Logo Image"
                width={100}
                height={100}
                className="w-[22px] h-[27.5px]"
              />
              <h2 className="font-semibold text-3xl text-[#00FF11]">
                How it works
              </h2>
            </motion.div>
            <div>
              <h3 className="text-xl font-normal mb-[46px] mt-[37px]">
                3 simple steps
              </h3>
              <motion.div
                className="space-y-[50px]"
                variants={containerVariants}
              >
                <motion.div
                  className="w-full flex items-center justify-between max-w-[500px] mx-auto"
                  variants={fadeInUp}
                >
                  <Image
                    src="/images/create-an-account.svg"
                    alt="Create Account Illustration"
                    width={100}
                    height={100}
                    className="w-full"
                  />
                  <p className="font-semibold text-[22px]">
                    <Image
                      src="/images/create-account-icon.svg"
                      alt="Create Account Icon"
                      width={31}
                      height={41}
                    />
                    Create An Account
                  </p>
                </motion.div>

                <motion.div
                  className="w-full flex items-center justify-between flex-row-reverse max-w-[500px] mx-auto"
                  variants={fadeInUp}
                >
                  <Image
                    src="/images/search-for-lodges.svg"
                    alt="Search for Illustration"
                    width={100}
                    height={100}
                    className="w-full"
                  />
                  <p className="font-semibold text-[22px]">
                    <Image
                      src="/images/search-for-lodge-icon.svg"
                      alt="Create Account Icon"
                      width={31}
                      height={41}
                    />
                    Search for lodges at your desired location
                  </p>
                </motion.div>

                <motion.div
                  className="w-full flex items-center justify-between max-w-[500px] mx-auto"
                  variants={fadeInUp}
                >
                  <Image
                    src="/images/chat.svg"
                    alt="Chat Illustration"
                    width={100}
                    height={100}
                    className="w-full"
                  />
                  <p className="font-semibold text-[22px]">
                    <Image
                      src="/images/chat-icon.svg"
                      alt="Create Account Icon"
                      width={31}
                      height={41}
                    />
                    Chat, and Secure your Spot
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <hr className="mb-[37px]" />

          <motion.p className="font-normal text-[23px]" variants={fadeInUp}>
            So whether you&apos;re a student seaching for a{" "}
            <span className="font-medium text-[#00FF11]">safe</span>, affordable
            room close to school, an agent hustling back to back, or a Landlord
            trying to rent out a vacant apartment,{" "}
            <span className="font-medium text-[#0EC530]">RoomRadar</span>{" "}
            bridges the gap with{" "}
            <span className="font-medium text-[#FFC403]">trust</span>,{" "}
            <span className="text-[#979191] font-medium">transparency</span>,
            and <span className="font-medium text-[#00FF11]">ease</span>.
          </motion.p>
        </div>
      </motion.section>

      <div className="w-full hidden xl:flex lg:flex-col relative">
        <motion.div
          className="absolute -top-[32rem] z-5 overflow-hidden -left-52 flex items-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/images/logo.svg"
            alt="Room Radar Logo"
            width={100}
            height={100}
            className="h-[526.63px] w-[421.3px]"
          />
        </motion.div>

        <section className="bg-[url('/images/map-desktop-bg.svg')] bg-center bg-cover bg-no-repeat h-[3483px] w-full z-10 ">
          <h2 className="flex flex-col font-extrabold leading-[190px] text-[#00FF11] relative -top-[12rem] pl-26">
            <span className="text-[210px]">Room</span>
            <span className="text-[240px]">Radar</span>
          </h2>

          <div className="w-full px-[120px] -mt-[20rem]">
            <div className="flex items-center gap-8">
              <p className="max-w-[644px] font-normal text-3xl leading-[200%] text-black">
                A <span className="text-[#00FF11] font-medium">smart,</span>{" "}
                student focused housing platform designed to eliminate the{" "}
                <span className="text-[#FFC403] font-medium">stress,</span>{" "}
                risk, and confusion that comes with finding off-Campus
                accomodation.
              </p>
              <motion.div
                className="w-full"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/images/create-account-desktop.svg"
                  alt="Create Account Illustration"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </motion.div>
            </div>

            <div className="flex flex-row-reverse justify-between text-black">
              <motion.div
                className="space-y-2 max-w-[570px] mt-24"
                variants={fadeInUp}
              >
                <h3 className="font-semibold text-[44px]">For Students:</h3>
                <motion.ul
                  className="list-disc pl-6 text-3xl font-normal space-y-4 *:leading-[2.8rem]"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.li variants={fadeInUp}>
                    <span className="font-medium text-[#00FF11]">Verified</span>{" "}
                    home listings only - no scams.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Smart filters (budget, amenities, distance to school)
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    In-app chat with{" "}
                    <span className="font-medium text-[#00FF11]">verified</span>{" "}
                    landlords
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Booking with deposit protection
                  </motion.li>
                  <motion.li variants={fadeInUp}>Pay securely online</motion.li>
                </motion.ul>
              </motion.div>
              <motion.div
                className="w-full max-w-xl"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/images/search-for-lodge-desktop.svg"
                  alt="Search For Lodge Illustration"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </motion.div>
            </div>

            <div className="flex items-center gap-8">
              <motion.div className="space-y-2 text-black" variants={fadeInUp}>
                <h3 className="font-semibold text-[44px]">
                  For Landlords and Agents:
                </h3>
                <motion.ul
                  className="list-disc pl-6 text-3xl font-normal space-y-4 *:leading-[2.8rem]"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.li variants={fadeInUp}>
                    Larger <span className="text-[#FFC403]">Reach</span> to
                    students
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Upload listings with photos and pricing
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Chat directly and manage transactions
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Build reputation with{" "}
                    <span className="text-[#FFC403]">reviews</span>
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Fill vacant rooms{" "}
                    <span className="text-[#FFC403]">faster</span>
                  </motion.li>
                </motion.ul>
              </motion.div>
              <motion.div
                className="w-full max-w-xl"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/images/chat-desktop.svg"
                  alt="Chat Illustration"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </motion.div>
            </div>

            <motion.p
              className=" mt-[197px] text-black font-medium text-[45px]"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              So whether you&apos;re a student seaching for a{" "}
              <span className="font-medium text-[#00FF11]">safe</span>,
              affordable room close to school, an agent hustling back to back,
              or a Landlord trying to rent out a vacant apartment,{" "}
              <span className="font-medium text-[#0EC530]">RoomRadar</span>{" "}
              bridges the gap with{" "}
              <span className="font-medium text-[#FFC403]">trust</span>,{" "}
              <span className="text-[#979191] font-medium">transparency</span>,
              and <span className="font-medium text-[#00FF11]">ease</span>.
            </motion.p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
