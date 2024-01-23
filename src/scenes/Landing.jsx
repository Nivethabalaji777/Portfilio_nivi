import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const [typo] = useTypewriter({
    words: ["Full Stack Developer.", "Web Developer.", "Web Designer."],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen gap-16 py-10"
    >
      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12" >
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          
      // style={{borderLeft: "6px solid green",height: "250px"}}
        >
          <p className="text-3xl font-playfair z-10 text-center md:text-start">
              Hi, I'm
          </p>
          <p className="text-6xl font-playfair z-10 text-center md:text-start text-yellow pb-8">
             Nivetha
          </p>
          <p className="text-3xl font-playfair z-10 text-center md:text-start">
          a  <span className="font-dancingscript" style={{color:"rgb(253 204 73)", fontSize: "40px"}}>{typo}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
          Experienced MERN stack developer adept with MongoDB, Express.js, React.js, and Node.js. <br />
          Focus on seamless integration of front-end and back-end technologies for fluid data flow<br /> and engaging user experiences.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex">
            <AnchorLink
              className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                hover:bg-blue hover:text-white transition duration-500"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Contact Me
            </AnchorLink>
            
            <a
              className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5 ml-2"
              href= {process.env.REACT_APP_RESUME}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
                <span style={{paddingRight:"15px"}}>Resume</span> <FaDownload />
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
