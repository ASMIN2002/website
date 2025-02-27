import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import va from "../assets/ai2.png";
import va1 from "../assets/imgen.jpg";
import va2 from "../assets/atlas.jpg";

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
                    <a
                      href="https://github.com/ASMIN2002/Confuse_Users"
                      target="_blank"
                    >
                      <button>Code</button>
                    </a>
                  </td>
                  <td className="preh">
                    <a
                      href="https://youtu.be/-sxoChyJO6E?si=_idjz7kRbvDc45Ks"
                      target="_blank"
                    >
                      <button>Output</button>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>Client Management</td>
                  <td>Java, Spring Boot, MySQL</td>
                  <td className="gith">
                    <a
                      href="https://github.com/ASMIN2002/Client_Management_System"
                      target="_blank"
                    >
                      <button>Code</button>
                    </a>
                  </td>
                  <td className="preh">
                    <a
                      href="https://youtu.be/B3aozNjA5zQ?si=DUKu0_DgwbmMkpzg"
                      target="_blank"
                    >
                      <button>Output</button>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>Service Application</td>
                  <td>Java, Servlets, MySQL</td>
                  <td className="gith">
                    <a
                      href="https://tinyurl.com/servicesapp027"
                      target="_blank"
                    >
                      <button>Code</button>
                    </a>
                  </td>
                  <td className="preh">
                    <a href="https://youtu.be/L80vW17vYfY" target="_blank">
                      <button>Output</button>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>Student Management</td>
                  <td>Java, JDBC, MySQL</td>
                  <td className="gith">
                    <a
                      href="https://tinyurl.com/studentManSystem"
                      target="_blank"
                    >
                      <button>Code</button>
                    </a>
                  </td>
                  <td className="preh">
                    <a
                      href="https://youtu.be/HDiPcNf8tTk?si=UVZ3VzFnDho3VLry"
                      target="_blank"
                    >
                      <button>Output</button>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>Book Store</td>
                  <td>Java, Servlets, MySQL</td>
                  <td className="gith">
                    <a
                      href="https://tinyurl.com/bookAppPro"
                      target="_blank"
                    >
                      <button>Code</button>
                    </a>
                  </td>
                  <td className="preh">
                    <a
                      href="https://youtu.be/67rSFGO8jZw?si=nHwxzZtM4YGJ5XvW"
                      target="_blank"
                    >
                      <button>Output</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Hospital Management</td>
                  <td>Java, Jdbc, MySQL</td>
                  <td className="gith">
                    <a
                      href="https://tinyurl.com/hospitalmsystem"
                      target="_blank"
                    >
                      <button>Code</button>
                    </a>
                  </td>
                  <td className="preh">
                    <a
                      href="https://youtu.be/X1RJnQ5n58Y?si=3K0zUxAI3hGPAt8R"
                      target="_blank"
                    >
                      <button>Output</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Product Management</td>
                  <td>Java, Spring Boot, MySQL</td>
                  <td className="gith">
                    <a
                      href="https://tinyurl.com/productmSystem"
                      target="_blank"
                    >
                      <button>Code</button>
                    </a>
                  </td>
                  <td className="preh">
                    <a
                      href="https://youtu.be/jvDKvSUg-yE?si=oINFiy1BkqeR1VZS"
                      target="_blank"
                    >
                      <button>Output</button>
                    </a>
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
            <div className="reac">
              <img src={va2} alt="" />
              <div className="descri">
                <a href="https://kuldeepatlas.netlify.app/">
                  <button>ATLAS</button>
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
        <Link to="/leetcode" className="home-page">
          <motion.button
            className="bckbtn1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            CLICK FOR DSA
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
};

export default Home;
