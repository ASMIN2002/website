import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Open = () => {
  return (
    <motion.div
      className="bodyr"
      initial={{ x: 0, opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }} // Slide out animation
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="container">
        <div className="text-content">
          <h1>
            I'm <span className="nme">Asmin Kuldeep Jena</span>,<br />A Software
            Developer
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            molestiae.
          </p>
          <Link to="/home">
            <motion.button
              className="more"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Projects
            </motion.button>
          </Link>
          <div class="social-icons">
            <a href="https://kuldeep027.netlify.app/" class="face" title="portfolio">
              <i class="fa-solid fa-user-secret"></i>
            </a>
            <a href="https://www.youtube.com/@letBuild/videos" class="you" title="youtube">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="mailto:asminkuldeep6@gmail.com" class="insta" title="mail">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="http://www.linkedin.com/in/asmin2002" class="liin" title="linkedin">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/ASMIN2002" class="git" title="github">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://leetcode.com/u/asminkuldeep6/" class="what" title="leetcode">
              <i class="fa-solid fa-code"></i>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Open;
