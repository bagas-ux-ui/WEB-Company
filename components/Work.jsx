import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";

import { motion } from "framer-motion";
import { fadeIn } from "@/public/assets/variants";

import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

const workData = [
  {
    img: "/assets/img/work/restoration.jpg",
    name: "restoration",
    description: "Your Short description",
    href: "",
  },
  {
    img: "/assets/img/work/construction.jpg",
    name: "construction",
    description: "Your Short description",
    href: "",
  },
  {
    img: "/assets/img/work/renovation.jpg",
    name: "renovation",
    description: "Your Short description",
    href: "",
  },
  {
    img: "/assets/img/work/consulting.jpg",
    name: "consulting",
    description: "Your Short description",
    href: "",
  },
];

const Work = () => {
  return (
    <div className="pt-16 xl:pt-32" id="projects">
      <div className="container mx-auto">
        <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2}}
        className="text-center max-w-[540px] mx-auto xl:mb-20">
          <Pretitle text="Our Work" center />
          <h2 className="h2 mb-3">Discover Our Projects</h2>
          <p className="text-black max-w-[480px] mx-auto">
            Providing expert services designer to deliver quality and innovation in
            every project we undertake
          </p>
        </motion.div>
      </div>
      <motion.div 
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2}}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {workData.map((item, index) => {
        return (
        <div
        key={index}
        className="w-full h-[492px] flex relative overflow-hidden group
        justify-center"
        >
          <Image src={item.img} 
          fill 
          className="object-cover" 
          alt=""
          quality={100}
          />
          <div className="w-[90%] h-[84px] bg-black absolute buttom-4 flex
          justify-between items-center text-white md:translate-y-[500px]
          md:group-hover:translate-y-100 transition-all duration-500">
            <div className="pl-8">
              <h4 className="text-white font-primary font-semibold tracking-[1px] uppercase">
                {item.name}
              </h4>
              <div className="flex items-center gap-1">
                <RiCheckboxCircleFill className="text-amber-300 text-xl"/>
                <p>{item.description}</p>
              </div>
              </div>
              <Link 
              href={item.href} 
              className="w-[44px] xl:w-[60px] xl:h-[60px] h-[44px] bg-amber-300
              text-black text-2xl flex justify-center items-center absolute
              right-3
              ">
                <RiArrowRightUpLine/>
              </Link>
          </div>
        </div>
        );
      })}
      </motion.div>
    </div>
  );
};

export default Work;