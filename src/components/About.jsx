import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image from "../assets/photo.png";

function About() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    
    const images = [image, image, image, image];

    const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
    const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
    
    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;
        
        if (isLeftSwipe) {
            setCurrentImageIndex((prev) => Math.min(prev + 1, images.length - 1));
        }
        if (isRightSwipe) {
            setCurrentImageIndex((prev) => Math.max(prev - 1, 0));
        }
        setTouchStart(0);
        setTouchEnd(0);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-20" id="about">
            <div className="flex gap-8 flex-col md:flex-row justify-between">
                {/* النص يتحرك من اليسار */}
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h2 className="text-4xl text-center md:text-left font-bold">About Us</h2>
                    <p className="my-10 text-center md:text-left mx-auto max-w-[500px]">Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq. m of space dedicated to top-of-the-line workout equipment from leading brands such as Hammer Strength, Life Fitness, and TechnoGym.</p>
                    <p className="my-10 text-center md:text-left mx-auto max-w-[500px]">With affordable membership options, Gym24 is accessible to everyone who wants to reach their fitness goals, whether it&apos;s building strength, increasing endurance, or losing weight.</p>
                    <p className="max-w-[500px] text-center md:text-left mx-auto">Certified trainers at Gym24 provide expert guidance and support to develop personalized workout plans tailored to each individual&apos;s needs and goals.</p>
                </motion.div>
                
                {/* الصور تتحرك من اليمين */}
                <motion.div 
                    className="md:w-1/2 w-full relative overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                        {images.map((img, index) => (
                            <div key={index} className="w-full flex-shrink-0 aspect-video">
                                <img src={img} alt={`About ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-xl" />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4 space-x-2">
                        {images.map((_, index) => (
                            <div key={index} className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'}`} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
