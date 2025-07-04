"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeInUp,
  fadeIn,
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

      <Testimonials />

      <motion.p
        className="font-medium my-[169px] px-8 flex flex-col w-full text-base leading-12 lg:font-bold lg:text-[31px] lg:leading-[58px] lg:items-start lg:pl-[92px] lg:mt-[321px] lg:gap-5 mb-[356px] lg:mb-[944px]"
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
              <div className="w-full h-[156px]">
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
                <ul className="list-disc pl-6 text-xl font-normal">
                  <li>
                    <span className="font-medium text-[#00FF11]">Verified</span>{" "}
                    home listings only - no scams.
                  </li>
                  <li>Smart filters (budget, amenities, distance to school)</li>
                  <li>
                    In-app chat with{" "}
                    <span className="font-medium text-[#00FF11]">verified</span>{" "}
                    landlords
                  </li>
                  <li>Booking with deposit protection</li>
                  <li>Pay securely online</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="space-y-10 mb-[53px]" variants={fadeInUp}>
              <div className="w-full h-[156px]">
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
                <ul className="list-disc pl-6 text-xl font-normal">
                  <li>
                    Larger{" "}
                    <span className="text-[#FFC403] font-medium">Reach</span> to
                    Students
                  </li>
                  <li>Upload listings with photos and pricing</li>
                  <li>Chat directly and manage transactions</li>
                  <li>
                    Build reputation with{" "}
                    <span className="text-[#FFC403] font-medium">reviews</span>
                  </li>
                  <li>
                    Fill vacant rooms{" "}
                    <span className="text-[#FFC403] font-medium">faster</span>
                  </li>
                </ul>
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
                  className="w-full flex items-center justify-between"
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
                  className="w-full flex items-center justify-between flex-row-reverse"
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
                  className="w-full flex items-center justify-between"
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

      <Footer />
    </div>
  );
}
