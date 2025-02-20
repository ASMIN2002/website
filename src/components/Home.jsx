import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import va from "../assets/ai2.png";
import va1 from "../assets/imgen.jpg";

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
                  <td>Confuse User</td>
                  <td>JFrame, Java</td>
                  <td className="gith">
                    <a href="https://github.com/ASMIN2002/Confuse_Users" target="_blank"><button>Code</button></a>
                  </td>
                  <td className="preh">
                    <a href="https://youtu.be/-sxoChyJO6E?si=_idjz7kRbvDc45Ks" target="_blank"><button>Output</button></a>
                  </td>
                </tr>

                <tr>
                  <td>Client Manaement</td>
                  <td>Java, Spring Boot, MySQL</td>
                  <td className="gith">
                    <a href="https://github.com/ASMIN2002/Client_Management_System" target="_blank"><button>Code</button></a>
                  </td>
                  <td className="preh">
                    <a href="https://youtu.be/B3aozNjA5zQ?si=DUKu0_DgwbmMkpzg" target="_blank"><button>Output</button></a>
                  </td>
                </tr>   

                <tr>
                  <td>Service Application</td>
                  <td>Java, Servlets, MySQL</td>
                  <td className="gith">
                    <a href="https://tinyurl.com/servicesapp027" target="_blank"><button>Code</button></a>
                  </td>
                  <td className="preh">
                    <a href="https://youtu.be/L80vW17vYfY" target="_blank"><button>Output</button></a>
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
                <a href="https://kuldeepai.netlify.app/">
                  <button>AI MODEL</button>
                </a>
              </div>
            </div>
            <div className="reac">
              <img src={va1} alt="" />
              <div className="descri">
                <a href="https://kuldeepaibot.netlify.app/">
                  <button>CHAT BOT</button>
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
