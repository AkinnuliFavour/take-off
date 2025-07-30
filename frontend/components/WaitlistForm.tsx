"use client";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, scaleIn } from "./animations/motion";
import { supabase } from "@/utils/SupabaseClient";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

export function WaitListForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isMessageVisible, setIsMessageVisible] = useState(true);

  useEffect(() => {
    if (message.text) {
      setIsMessageVisible(true);

      const fadeTimer = setTimeout(() => {
        setIsMessageVisible(false);
      }, 3000);

      const clearTimer = setTimeout(() => {
        setMessage({ type: "", text: "" });
        setIsMessageVisible(true);
      }, 3500);
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(clearTimer);
      };
    }
  }, [message]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const cleanPhone = phone.replace(/[^\d]/g, "");
    return cleanPhone.length >= 10 && cleanPhone.length <= 15;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (message.text) {
      setMessage({ type: "", text: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setMessage({ type: "error", text: "Please enter your name" });
      return;
    }

    if (!formData.email.trim()) {
      setMessage({ type: "error", text: "Please enter your email" });
      return;
    }

    if (!validateEmail(formData.email)) {
      setMessage({ type: "error", text: "Please enter a valid email address" });
      return;
    }

    if (!formData.telephone.trim()) {
      setMessage({ type: "error", text: "Please enter your telephone number" });
      return;
    }

    if (!validatePhone(formData.telephone)) {
      setMessage({
        type: "error",
        text: "Please enter a valid telephone number",
      });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      const { error } = await supabase.from("roomradar_waitlist").insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          telephone: formData.telephone.trim(),
        },
      ]);

      let supabaseExists = false;
      if (error) {
        if (error.code === "23505") {
          // Email exists in Supabase, but continue to check MailerLite
          supabaseExists = true;
          console.log(
            "Email already exists in Supabase, checking MailerLite..."
          );
        } else {
          setMessage({
            type: "error",
            text: "Something went wrong. Please try again.",
          });
          console.error("Supabase error:", error);
          return;
        }
      }

      let mailerLiteExists = false;
      try {
        const response = await fetch("/api/joinwaitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            telephone: formData.telephone.trim(),
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          // Check if MailerLite indicates email already exists
          if (
            response.status === 422 ||
            errorText.includes("already exists") ||
            errorText.includes("duplicate")
          ) {
            mailerLiteExists = true;
            console.log("Email already exists in MailerLite");
          } else {
            console.error("MailerLite subscription failed:", errorText);
          }
        }
      } catch (mailerError) {
        console.error("MailerLite network error:", mailerError);
      }

      // Only show "already on waitlist" if email exists in BOTH systems
      if (supabaseExists && mailerLiteExists) {
        setMessage({
          type: "error",
          text: "This email is already on our waitlist!",
        });
        return;
      }

      // Show success message if email was added to at least one system or doesn't exist in both
      setMessage({
        type: "success",
        text: "Successfully joined the waitlist! We'll notify you when we launch.",
      });
      setFormData({ name: "", email: "", telephone: "" });
    } catch (error) {
      console.error("Network error:", error);
      setMessage({
        type: "error",
        text: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      className="max-w-[1440px] mx-auto space-y-6 lg:space-y-16 mt-[52px] w-full px-4 xl:px-[145px]"
      variants={fadeInUp}
      onSubmit={handleSubmit}
    >
      <AnimatePresence mode="wait">
        {message.text && (
          <motion.div
            key="message"
            className={`p-4 rounded-lg text-center font-medium ${
              message.type === "success"
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-red-100 text-red-800 border border-red-200"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: isMessageVisible ? 1 : 0,
              y: isMessageVisible ? 0 : -10,
            }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {message.text}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="peer block w-full border border-[#00FF11] bg-white px-4 py-3 xl:py-5 text-[12.5px] lg:text-2xl xl:text-2xl focus:outline-none focus:border-[#0EC530] transition-colors rounded-[7px] text-black lg:placeholder-transparent"
          placeholder="Enter Name"
          autoComplete="name"
        />
        <label
          htmlFor="name"
          className="absolute left-4 top-1/2 -translate-y-1/2 lg:text-2xl xl:text-[32.13px] text-[12.5px] font-semibold pointer-events-none transition-all duration-200 hidden lg:block
                peer-focus:-top-6 peer-focus:text-[#00FF11]
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[#0EC530]
                peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[#00FF11]"
        >
          Enter Name
        </label>
      </div>
      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="peer block w-full border border-[#00FF11] bg-white px-4 py-3 xl:py-5 text-[12.5px] lg:text-2xl xl:text-2xl focus:outline-none focus:border-[#0EC530] transition-colors rounded-[7px] text-black lg:placeholder-transparent"
          placeholder="Email"
          autoComplete="email"
        />
        <label
          htmlFor="email"
          className="absolute left-4 top-1/2 -translate-y-1/2 lg:text-2xl xl:text-[32.13px] text-[12.5px] font-semibold pointer-events-none transition-all duration-200 hidden lg:block
                peer-focus:-top-6 peer-focus:text-[#00FF11]
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[#0EC530]
                peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[#00FF11]"
        >
          Email
        </label>
      </div>
      <div className="relative">
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleInputChange}
          required
          className="peer block w-full border border-[#00FF11] bg-white px-4 py-3 xl:py-5 text-[12.5px] lg:text-2xl xl:text-2xl focus:outline-none focus:border-[#0EC530] transition-colors rounded-[7px] text-black lg:placeholder-transparent"
          placeholder="Telephone"
          autoComplete="tel"
        />
        <label
          htmlFor="telephone"
          className="absolute left-4 top-1/2 -translate-y-1/2 lg:text-2xl xl:text-[32.13px] text-[12.5px] font-semibold pointer-events-none transition-all duration-200 hidden lg:block
                peer-focus:-top-6 peer-focus:text-[#00FF11]
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[#0EC530]
                peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[#00FF11]"
        >
          Telephone
        </label>
      </div>
      <motion.div
        className="w-full mx-auto flex items-center justify-center hover:cursor-pointer hover:opacity-90 lg:max-w-[289px] max-w-[135px]"
        variants={scaleIn}
      >
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
          variants={scaleIn}
          className={`font-bold text-base rounded-[10px] w-full py-2 xl:text-[39px] lg:text-2xl cursor-pointer transition-all duration-200 ${
            isSubmitting
              ? "bg-[#00FF11] cursor-not-allowed"
              : "bg-[#00FF11] hover:opacity-90"
          }`}
        >
          {isSubmitting ? <ClipLoader color="white" /> : "Join Waitlist"}
        </motion.button>
      </motion.div>
    </motion.form>
  );
}
