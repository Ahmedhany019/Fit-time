import { FaDumbbell, FaRulerCombined } from "react-icons/fa";
import { GiSkippingRope } from "react-icons/gi";
import { IoMdTimer } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Advantages() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const advantages = [
    {
      icon: <FaRulerCombined className="text-[#FAFF00] text-5xl" />,
      title: "15000 sq.m.",
      description: "A spacious gym for sports – a safe distance between exercise machines",
    },
    {
      icon: <FaDumbbell className="text-[#FAFF00] text-5xl" />,
      title: "More than 200 equipment",
      description: "No queues at the simulators, Premium equipment from the lifeStyle, Hammer Strength, TechnoGym",
    },
    {
      icon: <GiSkippingRope className="text-[#FAFF00] text-5xl" />,
      title: "4 fitness zones",
      description: "From cardio to functional and cycle. Seperate area for boxing and mixed martial arts",
    },
    {
      icon: <IoMdTimer className="text-[#FAFF00] text-5xl" />,
      title: "Round-the-clock operation",
      description: "The gym is open 24 hours a day, also works on all holidays and weekends",
    },
  ];

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="py-20 w-11/12 mx-auto"
      id="advantages"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center"
      >
        Reasons to join
      </motion.h2>

      <div className="py-10 grid md:grid-cols-2 gap-6 justify-center">
        {advantages.map((advantage, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="max-w-[500px] flex gap-4 items-center bg-[#222] text-white p-6 rounded-lg shadow-lg"
          >
            {advantage.icon}
            <div>
              <h3 className="text-lg font-bold text-yellow-400">{advantage.title}</h3>
              <p className="max-w-[400px] text-gray-300">{advantage.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Advantages;
