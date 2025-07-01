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
        className="p-8 lg:pl-[92px] max-w-[1265px]"
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
          </motion.p>

          <motion.p
            className="text-base font-medium lg:text-3xl lg:leading-14"
            variants={fadeInUp}
          >
            All <span className="text-[#00FF11] font-semibold">Off-K</span> kids
            all have one or two stories to tell, and some are worse than others.
          </motion.p>

          <motion.p className="font-medium lg:text-3xl" variants={fadeInUp}>
            Maybe you too have your own story to tell, But meet some real people
            like you who&apos;ve faced similar issues.{" "}
          </motion.p>
        </div>

        <div className="flex-col hidden xl:flex">
          <div className="lg:mt-[86px] lg:h-[618px] max-w-[1039px] relative p-8">
            <h4 className="text-[#3B3B3B] font-bold text-[125px] leading-[41px] absolute left-1/3 top-10 tracking-wide">
              Chiamaka
            </h4>
            <div className="w-full">
              <motion.div
                className="relative"
                style={{ zIndex: 10 }}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/images/chiamaka.svg"
                  alt="Commentor Picture"
                  width={100}
                  height={100}
                  className="h-[455px] w-[342px] absolute z-10 top-0 left-0"
                />
                <motion.div
                  className="bg-[#000000D4] absolute z-20 top-[21rem] left-10 text-center rounded-[5px] w-[269px] h-[171px] flex flex-col items-center justify-center"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h4 className="font-semibold text-[23px]">
                    Chiamaka Oyenchi
                  </h4>
                  <p className="text-2xl font-light italic">
                    300 Level, FUTA <br />
                    Mass Communication <br />
                    Fashion Retailer
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute z-5 bg-[#FFC403] text-black pl-[190px] pt-10 rounded-[20px] pb-18 pr-8 top-[97px] left-[200px] max-w-[886px]"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="font-semibold text-[38px]">
                  Chiamaka&apos;s Nightmare
                </h4>
                <div className="text-[27px] font-medium flex flex-col">
                  <p className="font-semibold">
                    300LVL Student. Good grades. Focused
                  </p>
                  <p className="text-[27px]">
                    But when she finally had to live off-campus,{" "}
                    <span className="font-semibold">Chaos</span>.
                  </p>
                  <ul className="list-disc pl-5">
                    <li>She Joined 5 Whats&apos;app group</li>
                    <li>
                      Walked under the sun for hours checking for
                      &quot;available&quot; rooms.
                    </li>
                    <li>Called 7 agents - 3 never showed up.</li>
                    <li>
                      Finally paid a ₦5,000 &quot;booking fee&quot; ... and got
                      ghosted.
                    </li>
                  </ul>
                </div>
                <motion.p
                  className="font-semibold text-[25px] w-full text-center absolute left-0 bottom-5"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  &quot;I felt lost and cheated. I just wanted a safe, honest
                  place.&quot;
                </motion.p>
              </motion.div>
            </div>
          </div>

          <div className="lg:mt-[86px] lg:h-[618px] max-w-[1039px] relative p-8">
            <h4 className="text-[#3B3B3B] font-bold text-[125px] leading-[41px] absolute left-1/3 top-10 tracking-wide">
              Jerry TecH
            </h4>
            <div className="w-full">
              <motion.div
                className="relative"
                style={{ zIndex: 10 }}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/images/jerry.svg"
                  alt="Commentor Picture"
                  width={100}
                  height={100}
                  className="h-[455px] w-[342px] absolute z-10 top-0 -right-40"
                />
                <motion.div
                  className="bg-[#000000D4] absolute z-20 top-[21rem] -right-32 text-center rounded-[5px] w-[269px] h-[171px] flex flex-col items-center justify-center"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h4 className="font-semibold text-[23px]">Jerry Adebayo</h4>
                  <p className="text-2xl font-light italic">
                    400 Level, OAU <br />
                    Computer Science <br />
                    Full Stack Dev. Framer
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute z-5 bg-[#C0C0C0] text-black pr-[200px] pt-10 rounded-[20px] pb-18 pl-8 top-[97px] left-[200px] max-w-[886px]"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="font-semibold text-[38px]">
                  Another &quot;Tech Bro&quot;
                </h4>
                <div className="text-[27px] font-medium flex flex-col">
                  <p className="font-normal">
                    <span className="font-semibold">
                      Jerry is that guy - Agba Senior dev.
                    </span>{" "}
                    He thought he had it all sorted. But when it came to getting
                    a room near school?{" "}
                    <span className="font-semibold">Tech failed him.</span>
                  </p>
                  <p className="font-normal">
                    He saw a room on Whatsapp - looked good, decent price, even
                    had &quot;Wi-Fi included.&quot;
                  </p>
                  <p className="font-normal">
                    He paid fast to secure it <br />
                    <span className="font-medium">When he arrived...</span>
                  </p>
                  <ul className="list-disc pl-5 font-medium">
                    <li>The room was already taken.</li>
                    <li>The lanlord stopped replying.</li>
                    <li>Jerry spent two week squatting with friends.</li>
                    <li>And yeah... no-Wi-Fi.</li>
                  </ul>
                </div>
                <motion.p
                  className="font-semibold text-[25px] w-full text-center absolute left-0 bottom-5"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  &quot;I automate everything... how did I not see this
                  coming?&quot;
                </motion.p>
              </motion.div>
            </div>
          </div>

          <div className="lg:mt-[160px] lg:h-[618px] max-w-[1039px] relative p-8">
            <h4 className="text-[#3B3B3B] font-bold text-[125px] leading-[41px] absolute left-[12rem] top-10">
              Mrs. Margaret
            </h4>
            <div className="w-full">
              <motion.div
                className="relative"
                style={{ zIndex: 10 }}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/images/mrs-magaret.svg"
                  alt="Commentor Picture"
                  width={100}
                  height={100}
                  className="h-[455px] w-[342px] absolute z-10 top-0 left-0"
                />
                <motion.div
                  className="bg-[#000000D4] absolute z-20 top-[21rem] left-10 text-center rounded-[5px] w-[269px] h-[171px] flex flex-col items-center justify-center"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h4 className="font-semibold text-[23px]">
                    Mrs. Margaret Oyeniyi
                  </h4>
                  <p className="text-2xl font-light italic">
                    Lanlady <br />
                    Oke-Igbo Area, near UNN <br />
                    His grace villa
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute z-5 bg-[#2A9821] text-black pl-[190px] pt-10 rounded-[20px] pb-18 pr-8 top-[97px] left-[200px] max-w-[886px]"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="font-semibold text-[38px]">A Business Woman.</h4>
                <div className="text-[27px] font-medium flex flex-col">
                  <p>
                    <span className="font-semibold">Mrs. Margaret </span>has
                    been renting out her two-bedroom apartments near the
                    university for years. She keeps her property clean, responds
                    quickly, and genuinely cares about her tenants. <br />
                    <span className="font-semibold">But.</span>
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Students promise to pay then disappear.</li>
                    <li>
                      Some damage to the property and then leave without notice.
                    </li>
                    <li>
                      She spends money printing flyers and waiting for agents
                      who never bring serious people.
                    </li>
                  </ul>
                </div>
                <motion.p
                  className="font-semibold text-[25px] w-full text-center absolute left-0 bottom-5"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  &quot;I just want good tenants who respect my space.&quot;
                </motion.p>
              </motion.div>
            </div>
          </div>

          <div className="lg:mt-[86px] lg:h-[618px] max-w-[1039px] relative p-8">
            <h4 className="text-[#3B3B3B] font-bold text-[125px] leading-[41px] absolute left-1/3 top-10 tracking-wide">
              Peter E.
            </h4>
            <div className="w-full">
              <motion.div
                className="relative"
                style={{ zIndex: 10 }}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/images/peter.svg"
                  alt="Commentor Picture"
                  width={100}
                  height={100}
                  className="h-[455px] w-[342px] absolute z-10 top-0 -right-40"
                />
                <motion.div
                  className="bg-[#000000D4] absolute z-20 top-[21rem] -right-32 text-center rounded-[5px] w-[269px] h-[171px] flex flex-col items-center justify-center"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h4 className="font-semibold text-[23px]">Jerry Adebayo</h4>
                  <p className="text-2xl font-light italic">
                    Peter Johnson <br />
                    Local Housing Agent <br />
                    Akure <br />
                    Manages 8 properties
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute z-5 bg-[#D07626] text-black pr-[200px] pt-10 rounded-[20px] pb-18 pl-8 top-[97px] left-[200px] max-w-[886px]"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="font-semibold text-[38px]">A real hustler</h4>
                <div className="text-[27px] font-medium flex flex-col">
                  <p className="font-medium">
                    <span className="font-semibold">
                      Peter has been helping students find housing for years.
                    </span>{" "}
                    He knows the streets. The lanlords. The buildings. <br />
                    <span className="font-semibold">
                      But lately business has changed.
                    </span>
                    <br />
                    Every semester he
                  </p>
                  his listings in 10+ WhatsApp groups.
                  <ul className="list-disc pl-5 font-medium">
                    <li>Students ghost him after asking 100 questions.</li>
                    <li>Landlords complain about empty rooms.</li>
                    <li>
                      He spends hours daily juggling chats, calls, and moving
                      round campus lodges.
                    </li>
                  </ul>
                </div>
                <motion.p
                  className="font-semibold text-[25px] w-full text-center absolute left-0 bottom-5"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  &quot;go hard ...or go home.&quot;
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:hidden mt-[100px] gap-[8rem] max-w-xl mx-auto">
          <motion.div
            className="w-full relative"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full flex items-center justify-center">
              <div
                className="w-[149px] h-[149px] rounded-full overflow-hidden mx-auto absolute z-10 -top-22 flex items-center justify-center"
                // No animation here!
              >
                <Image
                  src="images/chiamaka-mobile.svg"
                  alt="Testimonial Image"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <motion.div
              className="bg-[#FFC403] rounded-[10px] w-full z-5 relative text-black pt-18 px-4 py-4"
              variants={fadeInUp}
            >
              <h3 className="text-center text-[15px] font-semibold">
                Chiamaka Onyechi
              </h3>
              <p className="text-center italic font-light text-[19px] leading-[19px]">
                300 Level, FUTA <br />
                Mass Communication <br />
                Fashion Retailer
              </p>
              <hr className="my-[15px]" />
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-[17px]">
                  Chiamaka&apos;s Nightmare
                </p>
                <p className="font-semibold text-base">
                  300L student. Good grades. <br />
                  Focused.
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-base font-medium">
                    But when she finally had to live off-campus,{" "}
                    <span className="font-semibold">Chaos.</span>
                  </p>
                  <ul className="text-base font-medium list-disc pl-5">
                    <li>She joined 5 WhatsApp groups.</li>
                    <li>
                      Walked for hours under the sun checking
                      &quot;available&quot; rooms.
                    </li>
                    <li>Called 7 agents - 3 never showed up.</li>
                    <li>
                      Finally paid a ₦5,000 &quot;booking fee&quot; ... and got
                      ghosted.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-center font-semibold text-[13px] mt-[32px]">
                &quot;I felt lost and cheated. I just wanted a safe, honest
                place.&quot;
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full relative"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full flex items-center justify-center">
              <div
                className="w-[149px] h-[149px] rounded-full overflow-hidden mx-auto absolute z-10 -top-22 flex items-center justify-center"
                // No animation here!
              >
                <Image
                  src="images/chiamaka-mobile.svg"
                  alt="Testimonial Image"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <motion.div
              className="bg-[#C0C0C0] rounded-[10px] w-full z-5 relative text-black pt-18 px-4 py-4"
              variants={fadeInUp}
            >
              <h3 className="text-center text-[15px] font-semibold">
                Jerry Adebayo
              </h3>
              <p className="text-center italic font-light text-[19px] leading-[19px]">
                400 Level, OAU <br />
                Computer Science <br />
                Full Stack Dev. Framer
              </p>
              <hr className="my-[15px]" />
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-[17px]">
                  Another &quot;Tech Bro&quot;
                </p>
                <p className="font-medium text-base">
                  <span className="font-semibold">
                    Jerry is that guy - Agba Senior Dev.
                  </span>{" "}
                  He thought he had it all sorted. But when it came to getting a
                  room near school?{" "}
                  <span className="font-semibold">Tech failed him.</span>
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-base font-medium">
                    He saw a room on Whatsapp - looked good, decent price, even
                    had &quot;Wi-Fi included.&quot;
                    <br />
                    <span className="font-semibold">
                      He had paid fast to secure it.
                    </span>
                    <br />
                    When he arrived...
                  </p>
                  <ul className="text-base font-medium list-disc pl-5">
                    <li>The room was already taken.</li>
                    <li>The landlord stopped replying.</li>
                    <li>Jerry spent two week squatting with friends.</li>
                    <li>And yeah ... no Wi-Fi.</li>
                  </ul>
                </div>
              </div>
              <p className="text-center font-semibold text-[13px] mt-[32px]">
                &quot;I automate everything ... how did I not see this
                coming.&quot;
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full relative"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full flex items-center justify-center">
              <div
                className="w-[149px] h-[149px] rounded-full overflow-hidden mx-auto absolute z-10 -top-22 flex items-center justify-center"
                // No animation here!
              >
                <Image
                  src="images/chiamaka-mobile.svg"
                  alt="Testimonial Image"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <motion.div
              className="bg-[#2A9821] rounded-[10px] w-full z-5 relative text-black pt-18 px-4 py-4"
              variants={fadeInUp}
            >
              <h3 className="text-center text-[15px] font-semibold">
                Mrs. Magaret Oyeniyi.
              </h3>
              <p className="text-center italic font-light text-[19px] leading-[19px]">
                Landlady <br />
                Oke-Igbo Area, Near UNN <br />
                His Grace Villa
              </p>
              <hr className="my-[15px]" />
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-[17px]">A bussiness Woman.</p>
                <p className="font-medium text-base">
                  <span>Mrs. Magaret</span> has been renting out her two-bedroom
                  apartments near the university for years. She keeps her
                  property clean, responds quickly, and genuinely cares about
                  her tenants.
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-base font-semibold">But...</p>
                  <ul className="text-base font-medium list-disc pl-5">
                    <li>Students promise to pay then disappear.</li>
                    <li>Some damage the property and leave without notice.</li>
                    <li>
                      She spends money printing flyers and waiting for agents
                      who never bring serious people.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-center font-semibold text-[13px] mt-[32px]">
                &quot;I just want good tenants who respect my space.&quot;
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full relative"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full flex items-center justify-center">
              <div
                className="w-[149px] h-[149px] rounded-full overflow-hidden mx-auto absolute z-10 -top-22 flex items-center justify-center"
                // No animation here!
              >
                <Image
                  src="images/chiamaka-mobile.svg"
                  alt="Testimonial Image"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <motion.div
              className="bg-[#D07626] rounded-[10px] w-full z-5 relative text-black pt-18 px-4 py-4"
              variants={fadeInUp}
            >
              <h3 className="text-center text-[15px] font-semibold">
                Peter Johnson
              </h3>
              <p className="text-center italic font-light text-[19px] leading-[19px]">
                Local housing agent <br />
                Akure <br />
                Manages 8 properties
              </p>
              <hr className="my-[15px]" />
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-[17px]">A real hustler...</p>
                <p className="font-medium text-base">
                  <span>
                    Peter has been helping students find housing for years. He
                    knows the street. The landlords. The buildings.
                  </span>
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-base font-medium">
                    <span>But lately? Business had changed.</span>
                    <br />
                    Every semester, he updates his listings in 10+ Whatsapp
                    groups
                  </p>
                  <ul className="text-base font-medium list-disc pl-5">
                    <li>Students ghost him after asking 100 questions.</li>
                    <li>Landlords complain about empty rooms.</li>
                    <li>
                      He spends hours daily juggling chats, calls, and moving
                      round campus lodges.
                    </li>
                    <li>And yeah ... no Wi-Fi.</li>
                  </ul>
                </div>
              </div>
              <p className="text-center font-semibold text-[13px] mt-[32px]">
                &quot;go hard ... or go home.&quot;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <p className="font-medium my-[169px] px-8 flex flex-col w-full text-base leading-12 lg:font-bold lg:text-[31px] lg:leading-[58px] lg:items-start lg:pl-[92px] lg:mt-[321px] lg:gap-5 mb-[356px] lg:mb-[944px]">
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
      </p>

      <section className="bg-[url('/images/mobile-map.webp')] bg-center bg-cover bg-no-repeat xl:hidden relative text-black min-h-[2100px]">
        <div className="absolute top-[18rem] p-4 w-full">
          <div className="flex items-center gap-1">
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
          </div>

          <div className="bg-[#3B3B3B] w-full h-px mt-[50px] mb-[34px]"></div>

          <p className="mb-[90px] font-normal text-[23px]">
            A <span className="text-[#00FF11] font-medium">smart,</span> student
            focused housing platform designed to eliminate the{" "}
            <span className="text-[#FFC403] font-medium">stress,</span> risk,
            and confusion that comes with finding off-Campus accomodation.
          </p>

          <div className="space-y-[50px]">
            <div className="space-y-10">
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
            </div>

            <div className="space-y-10 mb-[53px]">
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
            </div>
          </div>

          <div className="mb-[183px]">
            <div className="flex items-center gap-2 border-b py-4 border-px border-[#3B3B3B] mb-[37px]">
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
            </div>
            <div>
              <h3 className="text-xl font-normal mb-[46px] mt-[37px]">
                3 simple steps
              </h3>
              <div className="space-y-[50px]">
                <div className="w-full flex items-center justify-between">
                  <Image
                    src="/images/create-an-account.svg"
                    alt="Create Account Illustration"
                    width={100}
                    height={100}
                    className="w-full"
                  />
                  <p className="font-semibold text-[22px]">
                    1. <br />
                    Create An Account
                  </p>
                </div>

                <div className="w-full flex items-center justify-between flex-row-reverse">
                  <Image
                    src="/images/search-for-lodges.svg"
                    alt="Search for Illustration"
                    width={100}
                    height={100}
                    className="w-full"
                  />
                  <p className="font-semibold text-[22px]">
                    2. <br />
                    Search for lodges at your desired location
                  </p>
                </div>

                <div className="w-full flex items-center justify-between">
                  <Image
                    src="/images/chat.svg"
                    alt="Chat Illustration"
                    width={100}
                    height={100}
                    className="w-full"
                  />
                  <p className="font-semibold text-[22px]">
                    3. <br />
                    Chat, and Secure your Spot
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="font-normal text-[23px]">
            So whether you&apos;re a student seaching for a <span className="font-medium text-[#00FF11]">safe</span>, affordable room close to school, an agent hustling back to back, or a Landlord trying to rent out a vacant apartment, <span className="font-medium text-[#0EC530]">RoomRadar</span> bridges the gap with <span className="font-medium text-[#FFC403]">trust</span>, <span className="text-[#979191] font-medium">transparency</span>, and <span className="font-medium text-[#00FF11]">ease</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
