import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Leetcode = () => {
  return (
    <>
      <motion.div
        className="homebody"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100vw", opacity: 0 }} // Exit animation
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="proj">DSA</h1>
        <div class="container1">
          <div class="table-container1">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>NAME</th>
                  <th>GitHub</th>
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Two Sum</td>
                  <td className="gith">
                    <a
                      href="https://github.com/ASMIN2002/DSA-JAVA/blob/main/TwoSum.java"
                      target="_blank"
                    >
                      <button>Code</button>
                    </a>
                  </td>
                  <td className="preh">
                    <a
                      href="https://youtu.be/18uksYdy4bQ?si=fCE4GA4LAICypYm4"
                      target="_blank"
                    >
                      <button>Output</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Palindrome Number</td>
                  <td className="gith">
                    <a href="https://tinyurl.com/palindromnum" target="_blank">
                      <button>Code</button>
                    </a>
                  </td>
                  <td className="preh">
                    <a
                      href="https://youtu.be/d7kJAfqob5A?si=RjdV0_RVaQ6lN9kt"
                      target="_blank"
                    >
                      <button>Output</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Longest Common Prefix</td>
                  <td className="gith">
                    <a
                      href="https://github.com/ASMIN2002/DSA-JAVA/blob/main/LongestCommonPrefix.java"
                      target="_blank"
                    >
                      <button>Code</button>
                    </a>
                  </td>
                  <td className="preh">
                    <a target="_blank">
                      <button>Output</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Valid Parentheses</td>
                  <td className="gith">
                    <a
                      href="https://github.com/ASMIN2002/DSA-JAVA/blob/main/ValidParentheses.java"
                      target="_blank"
                    >
                      <button>Code</button>
                    </a>
                  </td>
                  <td className="preh">
                    <a target="_blank">
                      <button>Output</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>Length of Last Word</td>
                  <td className="gith">
                    <a
                      href="https://github.com/ASMIN2002/DSA-JAVA/blob/main/LengthofLastWord.java"
                      target="_blank"
                    >
                      <button>Code</button>
                    </a>
                  </td>
                  <td className="preh">
                    <a target="_blank">
                      <button>Output</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>Remove Duplicates from Sorted Array</td>
                  <td className="gith">
                    <a
                      href="https://github.com/ASMIN2002/DSA-JAVA/blob/main/RemoveDuplicatesfromSortedArray.java"
                      target="_blank"
                    >
                      <button>Code</button>
                    </a>
                  </td>
                  <td className="preh">
                    <a target="_blank">
                      <button>Output</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td>Search Insert Position</td>
                  <td className="gith">
                    <a
                      href="https://github.com/ASMIN2002/DSA-JAVA/blob/main/SearchInsertPosition.java"
                      target="_blank"
                    >
                      <button>Code</button>
                    </a>
                  </td>
                  <td className="preh">
                    <a target="_blank">
                      <button>Output</button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Link to="/home" className="home-page">
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

export default Leetcode;
