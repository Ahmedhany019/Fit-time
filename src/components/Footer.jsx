import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -100 }}
          viewport={{ once: false }}
        >
            <h4 className="text-2xl font-bold">Fit <span className="text-[#FAFF00]">Time</span></h4>
            <p className="max-w-[250px] mt-2">Build strength and confidence at our gym with state-of-the-art equipment, personalized training, and a motivating community</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: 100 }}
          viewport={{ once: false }}
        >
            <h4 className="text-2xl font-bold">Address</h4>
            <p className=" mt-2">Republic of egypt</p>
            <p className=" mt-2">Mansoura city</p>
            <p className=" mt-2">Elderasat street</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -100 }}
          viewport={{ once: false }}
        >
            <h4 className="text-2xl font-bold">Contact</h4>
            <p className="max-w-[250px] mt-2">Phone: +20 100 000 0000</p>
            <p className="max-w-[250px] mt-2">Email: 8vzP7@example.com</p>
            <ul className="flex mt-2 gap-2">
                <li className="border rounded-full p-2 hover:bg-[#FAFF00] duration-500 hover:text-black"><a href="#"><FaInstagram/></a></li>
                <li className="border rounded-full p-2 hover:bg-[#FAFF00] duration-500 hover:text-black"><a href="#"><FaFacebook /></a></li>
                <li className="border rounded-full p-2 hover:bg-[#FAFF00] duration-500 hover:text-black"><a href="#"><FaTwitter /></a></li>
                <li className="border rounded-full p-2 hover:bg-[#FAFF00] duration-500 hover:text-black"><a href="#"><FaYoutube /></a></li>
            </ul>
        </motion.div>
    </div>
  )
}

export default Footer
