import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h3 className="onl">ONLY FOR ADMIN</h3>
      <div className="logcon">
        <form action="">
          <div className="form-data">
            <label htmlFor="">Email ID</label>
            <input type="email" name="" id="" required/>
          </div>

          <div className="form-data">
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" required/>
          </div>

          <div className="form-data">
            <label htmlFor="">Secret Key</label>
            <input type="password" name="" id="" required/>
          </div>

          <div>
          <Link to="/"><button className="subtn">Back</button></Link>
            <button type="submit" className="subtn">
              Submit
            </button>
            <Link to="/admin"><button className="subtn">Admin</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
