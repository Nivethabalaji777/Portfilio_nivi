import React, { useState, useEffect } from 'react';
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Experiences= () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="experiences" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-dancingscript font-semibold text-5xl mb-5 text-red">
          Experiences
        </p>
        <LineGradient width="mx-auto w-2/5" />
      </motion.div>

      {/* ExperienceS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-center p-16 mt-20`}
          style={{ height: screenWidth < 1300 ? '450px' : '350px' }}
          initial="hidden"
          whileInView="visible"
          whileHover={{
            scale: 1.05,
            color: 'blue',
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-center text-3xl">WEB DESIGNER</p>
          <hr className="mt-5"></hr>
          <p className="text-center text-xl mt-5" style={{ color: '#fff'}}>
          Proficient web designer with 1+ years of experience creating visually appealing, user-centric and crafting end-to-end websites.
          </p>
        </motion.div>

        <motion.div
          className={`mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-center p-16 mt-20`}
          style={{ height: screenWidth < 1300 ? '450px' : '350px' }}
          initial="hidden"
          whileInView="visible"
          whileHover={{
            scale: 1.05,
            color: 'blue',
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-center text-3xl">Creative Graphic Designer</p>
          <hr className="mt-5"></hr>
          <p className="text-center text-xl mt-5" style={{ color: '#fff'}}>
            Creative Graphic Designer with 4+ years of professional experience translating
            concepts into visually captivating designs, spanning branding, print collateral, and digital media.
          </p>
        </motion.div>

        <motion.div
          className={`mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-center p-16 mt-20`}
          style={{ height: screenWidth < 1300 ? '450px' : '350px' }}
          initial="hidden"
          whileInView="visible"
          whileHover={{
            scale: 1.05,
            color: 'blue',
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-center text-3xl">Creative Designer</p>
          <hr className="mt-5"></hr>
          <p className="text-center text-xl mt-5" style={{ color: '#fff'}}>
            Innovative designer specializing in glass, with 2+ years of experience bringing
            unique artistic visions to life through expert use of design software and printing
            techniques.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
