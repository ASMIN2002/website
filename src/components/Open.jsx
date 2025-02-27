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
          👋 Hi, I’m a Junior Software Developer passionate about building efficient and scalable applications. With a strong foundation in Software Skills, I specialize in backend development and creating robust CRUD-based applications.
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
            <a href="https://youtube.com/@kuldeep_ytube?si=PrbeZ2GkJU3zGm25" class="you" title="youtube" target="_blank">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://mailto:asminkuldeep6@gmail.com/" class="insta" title="mail" target="_blank">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="http://www.linkedin.com/in/asmin2002" class="liin" title="linkedin" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/ASMIN2002" class="git" title="github" target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://leetcode.com/u/asminkuldeep6/" class="what" title="leetcode" target="_blank">
              <i class="fa-solid fa-code"></i>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Open;
