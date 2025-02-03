"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "/public/hero2.png";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ translateX: -500 }}
      animate={{ translateX: 0 }}
      transition={{
        duration: 0.3,
      }}
      className="relative"
    >
      <Image
        src={heroImage}
        alt="Recruitment software"
        width={500}
        height={350}
        className=""
      />
    </motion.div>
  );
};

export default HeroImage;
