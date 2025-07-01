"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full p-4 relative">
      <p className="flex items-center border-b">
        <Image
          src="/images/logo.svg"
          alt="Logo Icon"
          width={100}
          height={100}
          className="w-[15.4px] h-[19.25px]"
        />
        Be the first to know when we launch.
      </p>

      <form className="max-w-md mx-auto mt-8 space-y-6">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            required
            className="peer block w-full border-b-2 border-[#00FF11] bg-transparent py-4 px-2 text-lg focus:outline-none focus:border-[#0EC530] transition-colors"
            placeholder=" "
            autoComplete="off"
          />
          <label
            htmlFor="name"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none transition-all duration-200
                peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#00FF11]
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400
                peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#00FF11]"
          >
            Name
          </label>
        </div>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            required
            className="peer block w-full border-b-2 border-[#00FF11] bg-transparent py-4 px-2 text-lg focus:outline-none focus:border-[#0EC530] transition-colors"
            placeholder=" "
            autoComplete="off"
          />
          <label
            htmlFor="email"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none transition-all duration-200
                peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#00FF11]
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400
                peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#00FF11]"
          >
            Email
          </label>
        </div>
        <button>Join Waitlist</button>
      </form>

      <div>
        <p>Get in touch</p>

      </div>

      <p className="font-extrabold text-[40px] leading-[66px] absolute bottom-0 right-0 flex items-center">
        <Image
          src="/images/logo.svg"
          alt="Logo Image"
          width={100}
          height={100}
          className="w-[29.15px] h-[36.44px]"
        />
        RoomRadar
      </p>
    </footer>
  );
}
