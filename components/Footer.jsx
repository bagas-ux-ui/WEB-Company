import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";

import { motion } from "framer-motion";
import { fadeIn } from "@/public/assets/variants";

import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
} from "react-icons/ri";

import Socials from "./Socials";

const Footer = () => {
  return (
    <motion.footer 
    variants={fadeIn("up", 0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.1}}
    className="mt-16 xl:mt-32 bg-black">
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[30px]">
          {/* logo & text */}
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
            <Image src="/assets/logo.svg" width={230} height={48} alt=""/>
            </Link>
            <p className="text-white max-w-[270px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repudiandae magnam quaerat! Esse sit sint dolor repudiandae perspiciatis, quis consectetur.
            </p>
          </div>
          {/* Contact */}
          <div className="flex-1 text-white">
            <h4 className="h3 text-white mb-14">Contact</h4>
            <ul className="text-xl">
              <li className="flex items-center gap-6 mb-4">
                <RiMapPin2Fill className="text-amber-300 text-xl"/>
              <p>Jalan aja dulu, kalau cocok angkut</p>
              </li>
              <li className="flex items-center gap-6 mb-4">
                <RiPhoneFill className="text-amber-300 text-xl"/>
              <p>+62 (555) 000-0000</p>
              </li>
              <li className="flex items-center gap-6">
                <RiMailFill className="text-amber-300 text-xl"/>
              <p>BagasKurniaRamadhan@gmail.com</p>
              </li>
            </ul>
          </div>
          {/* NewsLetter */}
          <div className="flex-1 text-white">
            <h4 className="h3 text-white mb-16">NewsLetter</h4>
            <p className="mb-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil sunt qui sit blanditiis doloribus?
            </p>
            {/* input */}
            <div className="relative max-w-[370px]">
              <Input 
              type="text" 
              placeholder="Enter Your Email" 
              className="bg-[#222427] h-16 w-full pl-7 rounded-none outline-none flex items-center"
              />
              <button className="bg-amber-300 w-12 h-12 absolute right-2 top-2 bottom-2 text-black text-xl flex items-center justify-center">
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* */}
      <div className="container mx-auto xl:px-0 py-12 border-t border-gray-800 flex flex-col gap-6 xl:flex-row items-center justify-between">
        <p className="text-white">
          Copyright &copy; 2025 UrbanBuild. All rights reserved.
        </p>
          <Socials
          containerStyles="flex gap-6 text-white"
          iconStyles="hover:text-accent transition-all"
          />
      </div>
    </motion.footer>
  );
};

export default Footer;