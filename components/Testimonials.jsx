import { motion } from "framer-motion";
import { fadeIn } from "@/public/assets/variants";

import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./Slider";

const Testimonials = () => {
  return (
   <section className="pt-16 xl:pt-16">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row relative">
        {/* text */}
        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2}}
        className="flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0">
          <Pretitle text="Testimonials" />
          <div>
          </div>
          <h2 className="h2 mb-6">Build On Trust, Proven By Results</h2>
          <p className="mb-10 max-w-[420px] text-black">
            From homes to commercial spaces, our clients share their experiences
            working with us. See how we've helped then bring their dreams to live with expert craftsmanship.
          </p>
          <Button text="Work with us"/>
        </motion.div>
        {/* img & slider */}
        <div className="flex-1 flex-col xl:flex-row xl:justify-end">
          <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
            <Image 
            src="/assets/img/testimonials/img.jpg"
            fill
            className="object-cover"
            quality={100}
            alt=""
            />
          </div>
          <div className="xl:absolute xl:bottom-0 shadow-black shadow-2xl xl:left-[300px] relative max-w-max">
            {/* quote icon img */}
            <Image 
            src="/assets/img/testimonials/quote.svg"
            width={54}
            height={36}
            alt=""
            className="absolute z-20 -top-4 left-[60px]"/>
            <Slider/>           
          </div>
        </div>
      </div>
    </div>
   </section>  
  );
};

export default Testimonials;