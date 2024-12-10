import React from 'react'
import gifa from '../images/gifa.gif';

function RegisterA() {
  return (
    <div className="form-container">
      <div className="form-header">
      <img src={gifa} alt="Doctor" className="doctor-img" />
        <h2>Admin Registration Form</h2>
      </div>

      <form className="admin-form">
        {/* Basic Information */}
        <h3>Basic Information</h3>
        <div className="form-section">
          <label>Full Name</label>
          <div className="two-columns">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="form-section">
          <label>Date of Birth</label>
          <input type="date" />
        </div>
        <div className="form-section">
          <label>Gender</label>
          <select>
            <option value="">Please Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Contact Information */}
        <h3>Contact Information</h3>
        <div className="form-section">
          <label>Email Address</label>
          <input type="email" placeholder="example@example.com" />
        </div>
        <div className="form-section">
          <label>Phone Number</label>
          <input type="tel" placeholder="000 000-0000" />
        </div>
        <div className="form-section">
          <label>Address</label>
          <input type="text" placeholder="Street Address" />
          <div className="three-columns">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State / Province" />
            <input type="text" placeholder="Postal / Zip Code" />
          </div>
        </div>

        {/* Job Details */}
        <h3>Job Details</h3>
        <div className="form-section">
          <label>Job Title</label>
          <input type="text" placeholder="e.g., Hospital Administrator" />
        </div>
        <div className="form-section">
          <label>Department</label>
          <select>
            <option value="">Please Select</option>
            <option value="admin">Administration</option>
            <option value="hr">HR</option>
            <option value="it">IT</option>
            <option value="finance">Finance</option>
            <option value="operations">Operations</option>
          </select>
        </div>
        <div className="form-section">
          <label>Employee ID</label>
          <input type="text" />
        </div>
        <div className="form-section">
          <label>Date of Joining</label>
          <input type="date" />
        </div>

        {/* Credentials */}
        <h3>Credentials</h3>
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

        {/* Permissions */}
        <h3>Permissions</h3>
        <div className="form-section">
          <label>Access Level</label>
          <select>
            <option value="">Please Select</option>
            <option value="super-admin">Super Admin</option>
            <option value="admin">Admin</option>
            <option value="restricted-admin">Restricted Admin</option>
          </select>
        </div>
        <div className="form-section">
          <label>Role Assignment</label>
          <div className="checkbox-group">
            <label><input type="checkbox" value="users" /> Manage Users</label>
            <label><input type="checkbox" value="records" /> Manage Patient Records</label>
            <label><input type="checkbox" value="appointments" /> Manage Appointments</label>
            <label><input type="checkbox" value="billing" /> Manage Billing</label>
          </div>
        </div>

        {/* Emergency Contact */}
        <h3>Emergency Contact</h3>
        <div className="form-section">
          <label>Emergency Contact Name</label>
          <input type="text" placeholder="Enter Name" />
        </div>
        <div className="form-section">
          <label>Emergency Contact Relationship</label>
          <input type="text" placeholder="Enter Relationship" />
        </div>
        <div className="form-section">
          <label>Emergency Contact Number</label>
          <input type="tel" placeholder="000 000-0000" />
        </div>

        {/* Additional Information */}
        <h3>Additional Information</h3>
        <div className="form-section">
          <label>Photo Upload</label>
          <input type="file" />
        </div>
        <div className="form-section">
          <label>Notes/Comments</label>
          <textarea placeholder="Write any additional comments here" />
        </div>

        {/* Submit */}
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  )
}

export default RegisterA