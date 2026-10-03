import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";

import { motion } from "framer-motion";
import { fadeIn } from "@/public/assets/variants";

const Contact = () => {
  return (
    <section className="pt-16 xl:pt-32" id="contact">
      <motion.div 
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2}}
      className="container mx-auto">
        <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-amber-300">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r
            xl:border-gray-500/40 h-[640px] text-black">
              <h4 className="text-[26px] font-primary font-bold mb-6">Contact Us</h4>
              <p className="mb-9">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam exercitationem eos eum, veniam velit nostrum.</p>
            {/* contact items */}
            <div className="flex flex-col gap-[40px] mb-16">
              {/* contact item */}
              <div className="flex items-start gap-[20px]">
                <div>
                  <RiChat1Line className="text-[20px] text-amber-300"/>
                </div>
                <div>
                  <h5 className="text-[22px] font-semibold font-primary leading-none mb-2 text-black">
                  Chat to use
                  </h5>
                  <p className="mb-4 text-black">Our friendly team is here to help</p>
                  <p className="font-semibold text-black">hi@urbanbuild.com</p>
                </div>
              </div>
              {/* contact item */}
              <div className="flex items-start gap-[20px]">
                <div>
                  <RiMapPin2Line className="text-[20px] text-amber-300"/>
                </div>
                <div>
                  <h5 className="text-[22px] font-semibold font-primary leading-none mb-2 text-black">
                  Office
                  </h5>
                  <p className="mb-4 text-black">Come and say hello at our office</p>
                  <p className="font-semibold text-black">jalan aja dulu, kalau cocok angkut</p>
                </div>
              </div>
              {/* contact item */}
              <div className="flex items-start gap-[20px]">
                <div>
                  <RiSmartphoneLine className="text-[20px] text-amber-300"/>
                </div>
                <div>
                  <h5 className="text-[22px] font-semibold font-primary leading-none mb-2 text-black">
                  Phone
                  </h5>
                  <p className="mb-4 text-black">Mon-Fri from 8am to 5pm</p>
                  <p className="font-semibold text-black">+62 (555) 000-0000</p>
                </div>
              </div>
            </div>
            <Socials 
            containerStyles="flex gap-[40px]"
            iconStyles="text-primary text-[20px]"
            />
            </div>
            {/* form */}
            <div className="flex-1">
              <h2 className="h2 mb-3"> Request A quote</h2>
              <p className="text-black mb-9">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum sapiente dolores, iusto nam voluptatum illum sed porro molestiae minus vitae?
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>  
  );
};

export default Contact