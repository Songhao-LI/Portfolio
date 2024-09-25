import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
      <>
          <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>Introduction</p>
              <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
              I'm a skilled full-stack software developer with experience in TypeScript, Python,
              Java and C#, and expertise in frameworks like React, Django, Spring Boot and
              Three.js. I'm a quick learner with a wide range of tech stack and
              collaborate closely with clients to create efficient, and user-friendly solutions
              that solve real-world problems. If you are interested in me, don't hesitate to reach out and {' '}
              <a
                  href="https://zcal.co/songhao"
                  className='text-blue-500 underline'
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  schedule a meeting
              </a>
              {' '}to further discuss how I can bring value to your team!
          </motion.p>

          <div className='mt-20 flex flex-wrap gap-10'>
              {services.map((service, index) => (
                  <ServiceCard key={service.title} index={index} {...service} />
              ))}
          </div>
      </>
  );
};

export default SectionWrapper(About, "about");
