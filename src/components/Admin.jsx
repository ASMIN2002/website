import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import va from "../assets/ai.png";

const Admin = () => {
  return (
    <>
      <motion.div
        className="homebody"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100vw", opacity: 0 }} // Exit animation
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="proj">Welcome Asmin</h1>
        <h3>Backend</h3>
        <div class="container1">
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>Edit</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>28</td>
                  <td className="gith">
                    <a href="" target="_blank"><button>Edit</button></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3>Frontend</h3>
        <div class="container1">
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>Edit</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>28</td>
                  <td className="gith">
                    <a href="" target="_blank"><button>Edit</button></a>
                  </td>
                </tr>
              </tbody>
            </table>
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

export default Admin;
