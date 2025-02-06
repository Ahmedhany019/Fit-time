/* eslint-disable no-unused-vars */
import { CiCircleCheck } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function MemberShip() {
    const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const price = [
    {
      name: "Basic",
      price: "$100",
      features: ["2 Personal trainers", "1 Free training session", "Free Wi-Fi", "Sauna"],
    },
    {
      name: "Premium",
      price: "$150",
      features: ["2 Personal trainers", "1 Free training session", "Free Wi-Fi", "Sauna", "Pool", "Free drinks"],
    },
    {
      name: "Gold",
      price: "$200",
      features: [
        "2 Personal trainers",
        "1 Free training session",
        "Free Wi-Fi",
        "Sauna",
        "Pool",
        "Free drinks",
        "Massage",
        "Free parking",
      ],
    },
    {
      name: "Platinum",
      price: "$250",
      features: [
        "2 Personal trainers",
        "1 Free training session",
        "Free Wi-Fi",
        "Sauna",
        "Pool",
        "Free drinks",
        "Massage",
        "Free parking",
        "Free breakfast",
      ],
    },
    {
      name: "Diamond",
      price: "$300",
      features: [
        "2 Personal trainers",
        "1 Free training session",
        "Free Wi-Fi",
        "Sauna",
        "Pool",
        "Free drinks",
        "Massage",
        "Free parking",
        "Free breakfast",
        "Free lunch",
      ],
    },
    {
      name: "Ultimate",
      price: "$350",
      features: [
        "2 Personal trainers",
        "1 Free training session",
        "Free Wi-Fi",
        "Sauna",
        "Pool",
        "Free drinks",
        "Massage",
        "Free parking",
        "Free breakfast",
        "Free lunch",
        "Free dinner",
      ],
    },
  ];

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      className="py-20 w-11/12 mx-auto"
      id="membership"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: .5 }}
        className="text-4xl md:text-6xl font-bold text-center"
      >
        Gym Membership
      </motion.h2>

      {/* Swiper في الشاشات الصغيرة */}
      <div className="md:hidden my-10 relative">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          spaceBetween={20}
          slidesPerView={1}
          className="pb-10"
        >
          {price.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="max-w-[300px] flex flex-col justify-between bg-[#222222] text-white py-4 px-8 rounded-lg mx-auto shadow-lg"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-yellow-400">{item.name}</h3>
                  <p className="text-3xl">{item.price}</p>
                </div>
                <ul className="my-4 flex-1">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CiCircleCheck className="text-xl" /> {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#FAFF00] px-8 py-2 w-fit mx-auto text-black cursor-pointer rounded-full shadow-md"
                >
                  Buy
                </motion.button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev left-0 text-black"></div>
        <div className="swiper-button-next right-0 text-black"></div>
      </div>

      {/* Grid في الشاشات الأكبر */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center my-10">
        {price.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="sm:w-[300px] w-full flex flex-col justify-between bg-[#222222] text-white py-4 px-8 rounded-lg mx-auto shadow-lg"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-yellow-400">{item.name}</h3>
              <p className="text-3xl">{item.price}</p>
            </div>
            <ul className="my-4 flex-1">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CiCircleCheck className="text-xl" /> {feature}
                </li>
              ))}
            </ul>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-[#FAFF00] px-8 py-2 w-fit mx-auto text-black cursor-pointer rounded-full shadow-md"
            >
              Buy
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default MemberShip;
