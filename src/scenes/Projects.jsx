import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './Projects/ProjectsStyle'
import ProjectCard from './Cards/ProjectCards'
import { projects } from './../data/constants'
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};


const Projects = () => {
  const [toggle, setToggle] = useState('all');
  return (
    <section id="projects" className="pt-28 pb-28">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
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
          <p className="font-dancingscript font-semibold text-5xl mb-5">
            <span className="text-red">Pro</span>jects
          </p>
          <LineGradient width="mx-auto w-2/5" />
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

      <Container>
            <Wrapper>
              
              <ToggleButtonGroup>
                {toggle === 'all' ?
                  <ToggleButton active value="all" onClick={() => setToggle('all')} style={{ color: toggle === 'all' ? 'rgb(253 204 73)' : 'white' }}>All</ToggleButton>
                  :
                  <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                }
                <Divider />
                {toggle === 'MERN-stack' ?
                  <ToggleButton active value="MERN-stack" onClick={() => setToggle('MERN-stack')} style={{ color: toggle === 'MERN-stack' ? 'rgb(253 204 73)' : 'white' }}>MERN-stack</ToggleButton>
                  :
                  <ToggleButton value="MERN-stack" onClick={() => setToggle('MERN-stack')}>MERN-stack</ToggleButton>
                }
                <Divider />
                {toggle === 'Reactjs' ?
                  <ToggleButton active value="Reactjs" onClick={() => setToggle('Reactjs')} style={{ color: toggle === 'Reactjs' ? 'rgb(253 204 73)' : 'white' }}>Reactjs</ToggleButton>
                  :
                  <ToggleButton value="Reactjs" onClick={() => setToggle('Reactjs')}>Reactjs</ToggleButton>
                }
                <Divider />
                {toggle === 'JavaScript' ?
                  <ToggleButton active value="JavaScript" onClick={() => setToggle('JavaScript')} style={{ color: toggle === 'JavaScript' ? 'rgb(253 204 73)' : 'white' }}>JavaScript</ToggleButton>
                  :
                  <ToggleButton value="JavaScript" onClick={() => setToggle('JavaScript')}>JavaScript</ToggleButton>
                }
              </ToggleButtonGroup>
              <div style={{textAlign:"center", border:"1px solid white", padding:"5px 10px", marginBottom:"20px"}}>
                <p style={{fontSize:"20px", paddingBottom:"2px", color:"rgb(253 204 73)"}}>Credentials</p>
                <p>user: nivethabharathi777@gmail.com | pswd: Pappu@12345</p>
                <p>admin: admin@gmail.com | pswd: Admin@12345</p>
              </div>

              <CardContainer>
                {toggle === 'all' && projects
                  .map((project) => (
                    <ProjectCard project={project}/>
                  ))}
                {projects
                  .filter((item) => item.category === toggle)
                  .map((project) => (
                    <ProjectCard project={project}/>
                  ))}
              </CardContainer>
            </Wrapper>
          </Container>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
