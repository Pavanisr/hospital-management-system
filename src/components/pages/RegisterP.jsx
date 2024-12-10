import React from 'react'
import gifp from '../images/gifp.gif';

function RegisterP() {
    return (
        <div className="form-container">
          <div className="form-header">
            <img src={gifp} alt="Doctor" className="doctor-img" />
            <h2 className='h2-p'>New Patient Enrollment</h2>
           
          </div>
    
          <form className="patient-form">
            <div className="form-section">
              <label>Name</label>
              <div className="two-columns">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
    
            <div className="form-section two-columns">
              <div>
                <label>Date of Birth</label>
                <input type="date" />
              </div>
              <div>
                <label>Sex</label>
                <select>
                  <option value="">Please Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
    
            <div className="form-section two-columns">
              <div>
                <label>Height (inches)</label>
                <input type="text" />
              </div>
              <div>
                <label>Weight (pounds)</label>
                <input type="text" />
              </div>
            </div>
    
            <div className="form-section">
              <label>Marital Status</label>
              <select>
                <option value="">Please Select</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="other">Other</option>
              </select>
            </div>
    
            <div className="form-section">
              <label>Contact Number</label>
              <input type="text" placeholder="000 000-0000" />
            </div>
    
            <div className="form-section">
              <label>Email</label>
              <input type="email" placeholder="example@example.com" />
            </div>
    
            <div className="form-section">
              <label>Address</label>
              <input type="text" placeholder="Street Address" />
              <input type="text" placeholder="Street Address Line 2" />
              <div className="three-columns">
                <input type="text" placeholder="City" />
                <input type="text" placeholder="State / Province" />
                <input type="text" placeholder="Postal / Zip Code" />
              </div>
            </div>
    
            <div className="form-section">
              <label>Taking any medications, currently?</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="medications" value="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="medications" value="no" /> No
                </label>
              </div>
            </div>
    
            <h3>In case of emergency</h3>
            <div className="form-section">
              <label>Emergency Contact</label>
              <div className="two-columns">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-section two-columns">
              <div>
                <label>Relationship</label>
                <input type="text" />
              </div>
              <div>
                <label>Contact Number</label>
                <input type="text" placeholder="000 000-0000" />
              </div>
            </div>

             {/* Login Details */}
      <h3>Login Details</h3>
      <div className="form-section">
        <label>Username</label>
        <input type="text" placeholder="Enter Username" />
      </div>
      <div className="form-section">
        <label>Password</label>
        <input type="password" placeholder="Enter Password" />
      </div>
      <div className="form-section">
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password" />
      </div>
    
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      );
}

export default RegisterP