"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

const StatsData = [
  {
    endCountNum: 99,
    EndCountText: "%",
    text: "Client Satisfaction",
  },
  {
    endCountNum: 800,
    EndCountText: "+",
    text: "Succesful Projects",
  },
  {
    endCountNum: 32,
    EndCountText: "k",
    text: "Happy Clients",
  },
  {
    endCountNum: 26,
    EndCountText: "+",
    text: "Years of",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { treshold: 0.2});
  return (
  <div ref={ref} className="mt-16 xl:mt-32 bg-primary py-10 w-full">
    <div className="container mx-auto h-full">
      <div className="text-white flex flex-col items-center justify-between
      xl:flex-row h-full gap-12 text-center xl:text-left">
        {StatsData.map((item, index) => {
          return (
            <div className="w-full" key={index}>
              <div className="text-5xl font-semibold">
                {inView && (
                  <CountUp
                  start={0}
                  end={item.endCountNum}
                  delay={0.5}
                  duration={3}
                  />
                )}
                <span>{item.EndCountText}</span>
              </div>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </div>)
};

export default Stats