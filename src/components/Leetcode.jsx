import React from "react";
import { Link } from "react-router-dom";

const Leetcode = () => {
  return (
    <>
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
            </tbody>
          </table>
        </div>
      </div>

      <Link to="/home" className="home-page">
        <button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bckbtn"
        >
          Go Back
        </button>
      </Link>
    </>
  );
};

export default Leetcode;
