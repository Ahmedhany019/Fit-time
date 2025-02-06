import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import { motion } from "framer-motion";
function Trainers() {

    const coach = [
        {
            name: "Ahmed",
            img: "https://randomuser.me/api/portraits/men/1.jpg",
            facebookIcon:<FaFacebookF className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />,
            instagramIcon:<FaInstagram className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />,
            twiiterIcon:<FaTwitter className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />
        },
        {
            name: "Ahmed",
            img: "https://randomuser.me/api/portraits/men/1.jpg",
            facebookIcon:<FaFacebookF className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />,
            instagramIcon:<FaInstagram className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />,
            twiiterIcon:<FaTwitter className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />
        },
        {
            name: "Ahmed",
            img: "https://randomuser.me/api/portraits/men/1.jpg",
            facebookIcon:<FaFacebookF className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />,
            instagramIcon:<FaInstagram className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />,
            twiiterIcon:<FaTwitter className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />
        },
        {
            name: "Ahmed",
            img: "https://randomuser.me/api/portraits/men/1.jpg",
            facebookIcon:<FaFacebookF className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />,
            instagramIcon:<FaInstagram className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />,
            twiiterIcon:<FaTwitter className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />
        },
        {
            name: "Ahmed",
            img: "https://randomuser.me/api/portraits/men/1.jpg",
            facebookIcon:<FaFacebookF className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />,
            instagramIcon:<FaInstagram className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />,
            twiiterIcon:<FaTwitter className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />
        },
        {
            name: "Ahmed",
            img: "https://randomuser.me/api/portraits/men/1.jpg",
            facebookIcon:<FaFacebookF className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />,
            instagramIcon:<FaInstagram className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />,
            twiiterIcon:<FaTwitter className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />
        },
        {
            name: "Ahmed",
            img: "https://randomuser.me/api/portraits/men/1.jpg",
            facebookIcon:<FaFacebookF className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />,
            instagramIcon:<FaInstagram className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />,
            twiiterIcon:<FaTwitter className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />
        },
        {
            name: "Ahmed",
            img: "https://randomuser.me/api/portraits/men/1.jpg",
            facebookIcon:<FaFacebookF className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />,
            instagramIcon:<FaInstagram className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />,
            twiiterIcon:<FaTwitter className="text-3xl hover:text-black hover:bg-[#FAFF00] duration-500 rounded-full p-2 border text-white" />
        },
    ]

  return (
    <div>
        <h1 className="text-4xl font-bold text-center">Trainers staff</h1>
        <div className="grid justify-center md:grid-cols-3 lg:grid-cols-4 gap-4 my-20">
            {coach.map((item, index) => (
                <motion.div
                className="flex bg-[#222222] rounded-xl p-4 w-[250px] flex-col items-center"
                key={index}
                whileInView={{ opacity: 1, x: 0 }} // يظهر عند الاقتراب
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} 
                transition={{ duration: 0.5, delay: index * 0.1 }}
                exit={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // يختفي تدريجيًا عند الابتعاد
                viewport={{ once: false }} // يجعل الأنيميشن يتكرر كل مرة
              >
                <div className="flex bg-[#222222] rounded-xl p-4 w-[250px] flex-col items-center" key={index}>
                    <img src={item.img} alt="" className="w-40 h-40 rounded-xl" />
                    <h2 className="text-2xl font-bold mt-3">{item.name}</h2>
                    <div className="flex space-x-4 my-3">
                        {item.facebookIcon}
                        {item.instagramIcon}
                        {item.twiiterIcon}
                    </div>
                </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Trainers