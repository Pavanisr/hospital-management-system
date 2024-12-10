import React, { useState } from "react";
import aa from "../images/aa.jpg";
import d from "../images/d.jpg";
import p from "../images/p.jpg";
import Modal from "react-modal";
import { Link } from "react-router-dom";



// Ensure the correct app element for accessibility
Modal.setAppElement("#rootapp");

function Logins() {
  
  const [patientVisible, setPatientVisible] = useState(false);
  const [doctorVisible, setDoctorVisible] = useState(false);
  const [adminVisible, setAdminVisible] = useState(false);


  return (
    <div className="container" id="Login">
      <div className="login-section">
        <a href="#" className="login-text">
          <h2>Logins</h2>
        </a>
        <div className="login-cards">
          {/* Patient Login */}
          <div className="login-card">
            <img src={p} alt="Patient" />
            <button className="btn btn-primary" onClick={() => setPatientVisible(true)}>
                 Patient Login
            </button>

            {/* Modal for Patient Login */}
            <Modal
              isOpen={patientVisible}
              onRequestClose={() => setPatientVisible(false)}
              className="model-set"
              overlayClassName="modal-overlay"
             >
              <div className="popup-content">
                <h2>Sign In</h2>
                <form>
                  <div className="form-group">
                    <label>Account Name</label>
                    <input type="text" placeholder="Enter Account Name" />
                  </div>
                  <div className="form-group">
                    <label>User ID</label>
                    <input type="text" placeholder="Enter User ID" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <div className="password-input">
                      <input type="password" placeholder="Enter Password" />
                      <button type="button" className="toggle-password">
                        👁
                      </button>
                    </div>
                  </div>
                  <div className="form-footer">
                    <div>
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember"> Remember me</label>
                    </div>
                    <a href="#" className="forgot-password">
                      Forgot password
                    </a>
                  </div>
                  <button type="submit" className="login-btn">
                    Log In
                  </button>
                </form>
                <Link to="/RegisterP" className="forgot-password">
                          Create New Account
                       </Link>
                <button
                  className="close-popup-btn"
                  onClick={() => setVisible(false)}
                >
                  Close
                </button>
              </div>
            </Modal>
          </div>

          {/* Doctor Login */}
          <div className="login-card">
            <img src={d} alt="Doctor" />
            <button className="btn btn-primary" onClick={() => setDoctorVisible(true)}>
                 Doctor Login
             </button>
            <Modal
                isOpen={doctorVisible}
                onRequestClose={() => setDoctorVisible(false)}
                className="model-set"
                overlayClassName="modal-overlay"
            >
              <div className="popup-content">
                <h2>Sign In</h2>
                <form>
                  <div className="form-group">
                    <label>Account Name</label>
                    <input type="text" placeholder="Enter Account Name" />
                  </div>
                  <div className="form-group">
                    <label>User ID</label>
                    <input type="text" placeholder="Enter User ID" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <div className="password-input">
                      <input type="password" placeholder="Enter Password" />
                      <button type="button" className="toggle-password">
                        👁
                      </button>
                    </div>
                  </div>
                  <div className="form-footer">
                    <div>
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember"> Remember me</label>
                    </div>
                    <a href="#" className="forgot-password">
                      Forgot Password?
                    </a>
                  </div>
                  <button type="submit" className="login-btn">
                    Log In
                  </button>
                </form>
                <Link to="/RegisterD" className="forgot-password">
                          Create New Account
                       </Link>
                <button
                  className="close-popup-btn"
                  onClick={() => setVisible(false)}
                >
                  Close
                </button>
              </div>
            </Modal>
          </div>

          {/* Admin Login */}
          <div className="login-card">
            <img src={aa} alt="Admin" />
            <button className="btn btn-primary" onClick={() => setAdminVisible(true)}>
                 Admin Login
            </button>
           <Modal
              isOpen={adminVisible}
              onRequestClose={() => setAdminVisible(false)}
              className="model-set"
              overlayClassName="modal-overlay"
             >
              <div className="popup-content">
                <h2>Sign In</h2>
                <form>
                  <div className="form-group">
                    <label>Account Name</label>
                    <input type="text" placeholder="Enter Account Name" />
                  </div>
                  <div className="form-group">
                    <label>User ID</label>
                    <input type="text" placeholder="Enter User ID" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <div className="password-input">
                      <input type="password" placeholder="Enter Password" />
                      <button type="button" className="toggle-password">
                        👁
                      </button>
                    </div>
                  </div>
                  <div className="form-footer">
                    <div>
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember"> Remember me</label>
                    </div>
                    <a href="#" className="forgot-password">
                      Forgot Password?
                    </a>
                  </div>
                  <button type="submit" className="login-btn">
                    Log In
                  </button>
                </form>
                <Link to="/RegisterA" className="forgot-password">
                          Create New Account
                       </Link>
                <button
                  className="close-popup-btn"
                  onClick={() => setVisible(false)}
                >
                  Close
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logins;
