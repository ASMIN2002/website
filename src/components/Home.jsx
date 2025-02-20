import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import va from "../assets/ai.png";

const Home = () => {
  return (
    <>
      <motion.div
        className="homebody"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100vw", opacity: 0 }} // Exit animation
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="proj">Projects</h1>
        <h3>Backend</h3>
        <div class="container1">
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>TOOLS, TECHNOLOGIES</th>
                  <th>GitHub</th>
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>28</td>
                  <td className="gith">
                    <a href="" target="_blank"><button>Code</button></a>
                  </td>
                  <td className="preh">
                    <a href="" target="_blank"><button>Output</button></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="fpro">
          <h3>Frontend</h3>
          <div className="imgp">
            <div className="reac">
              <img src={va} alt="" />
              <div className="descri">
                <a href="https://kuldeepai.netlify.app/" target="_blank">
                  <button>AI MODEL</button>
                </a>
              </div>
            </div>

            <div className="reac">
              <img src={va} alt="" />
              <div className="descri">
                <a href="#">
                  <button>AI MODEL</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Link to="/" className="home-page">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bckbtn"
          >
            Go Back
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
};

export default Home;
