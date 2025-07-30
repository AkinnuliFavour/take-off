"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  containerVariants,
  childVariants,
} from "./animations/motion";

export default function Testimonials() {
  return (
    <section className="p-8 lg:pl-[92px] max-w-[1440px] mx-auto">
      <motion.div
        className="p-2 flex flex-col gap-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-base font-medium lg:text-3xl">
          <span className="text-[#00FF11] font-semibold">Off-Campus</span> life
          can feel like a maze of{" "}
          <span className="text-[#FFC403] font-semibold">scams</span>,{" "}
          <span className="text-[#FFC403] font-semibold">long walks</span>, and{" "}
          <span className="text-[#FFC403] font-semibold">hidden fees</span>.
        </p>

        <p className="text-base font-medium lg:text-3xl lg:leading-14">
          All <span className="text-[#00FF11] font-semibold">Off-K</span> kids
          all have one or two stories to tell, and some are worse than others.
        </p>

        <p className="font-medium lg:text-3xl">
          Maybe you too have your own story to tell, But meet some real people
          like you who&apos;ve faced similar issues.
        </p>
      </motion.div>

      <motion.div
        className="w-full flex-col hidden xl:flex"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="lg:mt-[86px] lg:h-[618px] max-w-[1039px] relative p-8"
          variants={childVariants}
        >
          <h4 className="text-[#3B3B3B] font-bold text-[125px] leading-[41px] absolute left-1/3 top-10 tracking-wide">
            Chiamaka
          </h4>
          <div className="w-full">
            <div className="relative" style={{ zIndex: 10 }}>
              <Image
                src="/images/chiamaka.svg"
                alt="Commentor Picture"
                width={100}
                height={100}
                className="h-[455px] w-[342px] absolute z-10 top-0 left-0"
              />
              <motion.div
                className="bg-[#000000D4] absolute z-20 top-[21rem] left-10 text-center rounded-[5px] w-[269px] h-[171px] flex flex-col items-center justify-center"
                variants={fadeInUp}
              >
                <h4 className="font-semibold text-[23px]">Chiamaka Oyenchi</h4>
                <p className="text-2xl font-light italic">
                  300 Level, FUTA <br />
                  Mass Communication <br />
                  Fashion Retailer
                </p>
              </motion.div>
            </div>
            <motion.div
              className="absolute z-5 bg-[#FFC403] text-black pl-[190px] pt-10 rounded-[20px] pb-18 pr-8 top-[97px] left-[200px] max-w-[886px]"
              variants={fadeInUp}
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
              <p className="font-semibold text-[25px] w-full text-center absolute left-0 bottom-5">
                &quot;I felt lost and cheated. I just wanted a safe, honest
                place.&quot;
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="lg:mt-[86px] lg:h-[618px] max-w-[1039px] relative p-8">
          <h4 className="text-[#3B3B3B] font-bold text-[125px] leading-[41px] absolute left-1/3 top-10 tracking-wide">
            Jerry TecH
          </h4>
          <div className="w-full">
            <div className="relative" style={{ zIndex: 10 }}>
              <Image
                src="/images/jerry.svg"
                alt="Commentor Picture"
                width={100}
                height={100}
                className="h-[455px] w-[342px] absolute z-10 top-0 -right-40"
              />
              <div className="bg-[#000000D4] absolute z-20 top-[21rem] -right-32 text-center rounded-[5px] w-[269px] h-[171px] flex flex-col items-center justify-center">
                <h4 className="font-semibold text-[23px]">Jerry Adebayo</h4>
                <p className="text-2xl font-light italic">
                  400 Level, OAU <br />
                  Computer Science <br />
                  Full Stack Dev. Framer
                </p>
              </div>
            </div>
            <div className="absolute z-5 bg-[#C0C0C0] text-black pr-[200px] pt-10 rounded-[20px] pb-18 pl-8 top-[97px] left-[200px] max-w-[886px]">
              <h4 className="font-semibold text-[38px]">
                Another &quot;Tech Bro&quot;
              </h4>
              <div className="text-[27px] font-medium flex flex-col">
                <p className="font-normal">
                  <span className="font-semibold">
                    Jerry is that guy - Agba Senior dev.
                  </span>{" "}
                  He thought he had it all sorted. But when it came to getting a
                  room near school?{" "}
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
              <p className="font-semibold text-[25px] w-full text-center absolute left-0 bottom-5">
                &quot;I automate everything... how did I not see this
                coming?&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="lg:mt-[160px] lg:h-[618px] max-w-[1039px] relative p-8">
          <h4 className="text-[#3B3B3B] font-bold text-[125px] leading-[41px] absolute left-[12rem] top-10">
            Mrs. Margaret
          </h4>
          <div className="w-full">
            <div className="relative" style={{ zIndex: 10 }}>
              <Image
                src="/images/mrs-magaret.svg"
                alt="Commentor Picture"
                width={100}
                height={100}
                className="h-[455px] w-[342px] absolute z-10 top-0 left-0"
              />
              <div className="bg-[#000000D4] absolute z-20 top-[21rem] left-10 text-center rounded-[5px] w-[269px] h-[171px] flex flex-col items-center justify-center">
                <h4 className="font-semibold text-[23px]">
                  Mrs. Margaret Oyeniyi
                </h4>
                <p className="text-2xl font-light italic">
                  Lanlady <br />
                  Oke-Igbo Area, near UNN <br />
                  His grace villa
                </p>
              </div>
            </div>
            <div className="absolute z-5 bg-[#2A9821] text-black pl-[190px] pt-10 rounded-[20px] pb-18 pr-8 top-[97px] left-[200px] max-w-[886px]">
              <h4 className="font-semibold text-[38px]">A Business Woman.</h4>
              <div className="text-[27px] font-medium flex flex-col">
                <p>
                  <span className="font-semibold">Mrs. Margaret </span>has been
                  renting out her two-bedroom apartments near the university for
                  years. She keeps her property clean, responds quickly, and
                  genuinely cares about her tenants. <br />
                  <span className="font-semibold">But.</span>
                </p>
                <ul className="list-disc pl-5">
                  <li>Students promise to pay then disappear.</li>
                  <li>
                    Some damage to the property and then leave without notice.
                  </li>
                  <li>
                    She spends money printing flyers and waiting for agents who
                    never bring serious people.
                  </li>
                </ul>
              </div>
              <p className="font-semibold text-[25px] w-full text-center absolute left-0 bottom-5">
                &quot;I just want good tenants who respect my space.&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="lg:mt-[86px] lg:h-[618px] max-w-[1039px] relative p-8">
          <h4 className="text-[#3B3B3B] font-bold text-[125px] leading-[41px] absolute left-1/3 top-10 tracking-wide">
            Peter E.
          </h4>
          <div className="w-full">
            <div className="relative" style={{ zIndex: 10 }}>
              <Image
                src="/images/peter.svg"
                alt="Commentor Picture"
                width={100}
                height={100}
                className="h-[455px] w-[342px] absolute z-10 top-0 -right-40"
              />
              <div className="bg-[#000000D4] absolute z-20 top-[21rem] -right-32 text-center rounded-[5px] w-[269px] h-[171px] flex flex-col items-center justify-center">
                <h4 className="font-semibold text-[23px]">Jerry Adebayo</h4>
                <p className="text-2xl font-light italic">
                  Peter Johnson <br />
                  Local Housing Agent <br />
                  Akure <br />
                  Manages 8 properties
                </p>
              </div>
            </div>
            <div className="absolute z-5 bg-[#D07626] text-black pr-[200px] pt-10 rounded-[20px] pb-18 pl-8 top-[97px] left-[200px] max-w-[886px]">
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
              <p className="font-semibold text-[25px] w-full text-center absolute left-0 bottom-5">
                &quot;go hard ...or go home.&quot;
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div
        className="flex flex-col xl:hidden mt-[200px] gap-[8rem] max-w-xl mx-auto"
        style={{ visibility: "visible", opacity: 1 }}
      >
        <div className="w-full relative">
          <div className="w-full flex items-center justify-center">
            <div className="w-[149px] h-[149px] rounded-full overflow-hidden mx-auto absolute z-10 -top-22 flex items-center justify-center">
              <Image
                src="images/chiamaka-mobile.svg"
                alt="Testimonial Image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-[#FFC403] rounded-[10px] w-full z-5 relative text-black pt-18 px-4 py-4">
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
          </div>
        </div>

        <div className="w-full relative">
          <div className="w-full flex items-center justify-center">
            <div className="w-[149px] h-[149px] rounded-full overflow-hidden mx-auto absolute z-10 -top-22 flex items-center justify-center">
              <Image
                src="images/jerry-mobile.svg"
                alt="Testimonial Image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-[#C0C0C0] rounded-[10px] w-full z-5 relative text-black pt-18 px-4 py-4">
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
          </div>
        </div>

        <div className="w-full relative">
          <div className="w-full flex items-center justify-center">
            <div className="w-[149px] h-[149px] rounded-full overflow-hidden mx-auto absolute z-10 -top-22 flex items-center justify-center">
              <Image
                src="images/mrs-margaret-mobile.svg"
                alt="Testimonial Image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-[#2A9821] rounded-[10px] w-full z-5 relative text-black pt-18 px-4 py-4">
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
                apartments near the university for years. She keeps her property
                clean, responds quickly, and genuinely cares about her tenants.
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-base font-semibold">But...</p>
                <ul className="text-base font-medium list-disc pl-5">
                  <li>Students promise to pay then disappear.</li>
                  <li>Some damage the property and leave without notice.</li>
                  <li>
                    She spends money printing flyers and waiting for agents who
                    never bring serious people.
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center font-semibold text-[13px] mt-[32px]">
              &quot;I just want good tenants who respect my space.&quot;
            </p>
          </div>
        </div>

        <div className="w-full relative">
          <div className="w-full flex items-center justify-center">
            <div className="w-[149px] h-[149px] rounded-full overflow-hidden mx-auto absolute z-10 -top-22 flex items-center justify-center">
              <Image
                src="images/peter-mobile.svg"
                alt="Testimonial Image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-[#D07626] rounded-[10px] w-full z-5 relative text-black pt-18 px-4 py-4">
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
                  Every semester, he updates his listings in 10+ Whatsapp groups
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
          </div>
        </div>
      </div>
    </section>
  );
}
