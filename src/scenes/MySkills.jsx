import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import React from "react";
import "./Myskills.css";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithubSquare,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiReact,
  SiExpress,
  SiNetlify,
  SiRender,
  SiWordpress
} from "react-icons/si";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      <motion.div
        className="md:w-2/5 mx-auto text-center mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-dancingscript font-semibold text-4xl mb-5">
            My <span className="text-red">Skills</span>
          </p>
          <LineGradient width="mx-auto w-2/5" />
        </div>
      </motion.div>
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-5">
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          
          <div className="row">
          {/* ------------------------- */}
          <div className="col-lg-4 skills-col">
            
            <div className="skills-card">
              <div className="skills-icon">
                <FaHtml5 className="html-icon" />
              </div>
              <div className="skills-name">HTML5</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <FaCss3Alt className="css-icon" />
              </div>
              <div className="skills-name">CSS3</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <FaJsSquare className="js-icon" />
              </div>
              <div className="skills-name">JavaScript</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <FaBootstrap className="bootstrap-icon" />
              </div>
              <div className="skills-name">Bootstrap</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <SiReact className="react-icon" />
              </div>
              <div className="skills-name">React.js</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <SiMysql className="mysql-icon" />
              </div>
              <div className="skills-name">MySQL</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <SiMongodb className="mongodb-icon" />
              </div>
              <div className="skills-name">MongoDB</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <SiExpress className="express-icon" />
              </div>
              <div className="skills-name">Express.js</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <FaNodeJs className="node-icon" />
              </div>
              <div className="skills-name">Node.js</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <FaGithubSquare className="github-icon" />
              </div>
              <div className="skills-name">GitHub</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <SiNetlify className="netlify-icon" />
              </div>
              <div className="skills-name">Netlify</div>
            </div>

            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <SiRender className="render-icon" />
              </div>
              <div className="skills-name">Render</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <SiWordpress className="wordpress-icon" />
              </div>
              <div className="skills-name">Wordpress</div>
            </div>
            {/* ------------------------- */}
          </div></div>
        </motion.div>

        <div className="mt-16 md:mt-36">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

    </section>
  );
};

export default MySkills;
