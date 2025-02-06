/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import hero from "../assets/background.png";

function Home() {
  const [isBarsOpen, setIsBarsOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden" id="#">
      {/* Header */}
      <div className="flex justify-between items-center py-4 px-8 text-white relative">
        <h1 className="flex-1 text-2xl font-bold">
          Fit <span className="text-[#FAFF00]">Time</span>
        </h1>

        {/* القائمة الجانبية للموبايل */}
        <div className="">
          <div
            className="md:hidden text-xl cursor-pointer z-[999]"
            onClick={() => setIsBarsOpen(!isBarsOpen)}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isBarsOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isBarsOpen ? <IoMdClose /> : <FaBars />}
            </motion.div>
          </div>

          <AnimatePresence>
            {isBarsOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute top-14 left-0 w-full bg-black flex flex-col p-4 items-start space-y-4 shadow-lg"
              >
                {["Home", "Membership", "About", "Trainers"].map(
                  (item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="hover:text-[#FAFF00] duration-500 cursor-pointer text-white text-lg"
                    >
                      <a href="#">{item}</a>
                    </motion.li>
                  )
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* القائمة العادية للكمبيوتر */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-6">
            {["Home", "Membership", "About", "Trainers"].map((item, index) => (
              <li
                key={index}
                className="hover:text-[#FAFF00] duration-500 cursor-pointer text-lg"
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="text-white h-full flex flex-col justify-center items-start bg-cover bg-center px-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold max-w-[400px] leading-tight"
        >
          Free trial session with a trainer
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-[#FAFF00] px-8 py-3 text-black cursor-pointer rounded-full mt-6 font-semibold text-lg shadow-lg hover:bg-yellow-300 duration-300"
        >
          Details
        </motion.button>
      </div>
    </div>
  );
}

export default Home;
