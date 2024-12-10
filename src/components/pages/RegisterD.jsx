import React from 'react'
import giphy from '../images/giphy.gif';


function RegisterD() {
  return (
   

    <div className="form-container">
    <div className="form-header">
    <img src={giphy} alt="Doctor" className="doctor-img" />
      <h2 className="h2-p">Doctor Registration Form</h2>
    </div>

    <form className="doctor-form">
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
      <div className="form-section">
        <label>Photo</label>
        <input type="file" />
      </div>

      {/* Professional Details */}
      <h3>Professional Details</h3>
      <div className="form-section">
        <label>Medical Registration Number</label>
        <input type="text" placeholder="License/Registration ID" />
      </div>
      <div className="form-section">
        <label>Specialization</label>
        <select>
          <option value="">Please Select</option>
          <option value="cardiologist">Cardiologist</option>
          <option value="pediatrician">Pediatrician</option>
          <option value="neurologist">Neurologist</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-section">
        <label>Years of Experience</label>
        <input type="number" placeholder="Enter number of years" />
      </div>
      <div className="form-section">
        <label>Qualifications</label>
        <input type="text" placeholder="e.g., MBBS, MD" />
      </div>
      <div className="form-section">
        <label>Hospital/Clinic Name</label>
        <input type="text" placeholder="Enter Name" />
      </div>
      <div className="form-section">
        <label>Current Designation</label>
        <input type="text" placeholder="e.g., Consultant, Resident Doctor" />
      </div>

      {/* Contact Details */}
      <h3>Contact Details</h3>
      <div className="form-section">
        <label>Phone Number</label>
        <input type="text" placeholder="Primary Contact" />
      </div>
      <div className="form-section">
        <label>Alternate Phone Number</label>
        <input type="text" />
      </div>
      <div className="form-section">
        <label>Email Address</label>
        <input type="email" placeholder="example@example.com" />
      </div>
      <div className="form-section">
        <label>Clinic/Hospital Address</label>
        <input type="text" placeholder="Street Address" />
        <div className="three-columns">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State / Province" />
          <input type="text" placeholder="Postal / Zip Code" />
        </div>
      </div>

      {/* Availability */}
      <h3>Availability</h3>
      <div className="form-section">
        <label>Consultation Hours</label>
        <div className="two-columns">
          <input type="time" />
          <input type="time" />
        </div>
      </div>
      <div className="form-section">
        <label>Days Available</label>
        <div className="checkbox-group">
          <label><input type="checkbox" value="monday" /> Monday</label>
          <label><input type="checkbox" value="tuesday" /> Tuesday</label>
          <label><input type="checkbox" value="wednesday" /> Wednesday</label>
          <label><input type="checkbox" value="thursday" /> Thursday</label>
          <label><input type="checkbox" value="friday" /> Friday</label>
          <label><input type="checkbox" value="saturday" /> Saturday</label>
          <label><input type="checkbox" value="sunday" /> Sunday</label>
        </div>
      </div>

      {/* Emergency Details */}
      <h3>Emergency Details</h3>
      <div className="form-section">
        <label>Emergency Contact Person</label>
        <input type="text" placeholder="Enter Name" />
      </div>
      <div className="form-section">
        <label>Emergency Contact Number</label>
        <input type="text" placeholder="000 000-0000" />
      </div>

      {/* Medical Practice Details */}
      <h3>Medical Practice Details</h3>
      <div className="form-section">
        <label>Area of Expertise</label>
        <input type="text" placeholder="e.g., Diabetes Management" />
      </div>
      <div className="form-section">
        <label>Languages Spoken</label>
        <input type="text" placeholder="e.g., English, Spanish" />
      </div>
      <div className="form-section">
        <label>Preferred Mode of Consultation</label>
        <div className="checkbox-group">
          <label><input type="checkbox" value="in-person" /> In-Person</label>
          <label><input type="checkbox" value="video" /> Video</label>
          <label><input type="checkbox" value="phone" /> Phone</label>
        </div>
      </div>

      {/* Additional Information */}
      <h3>Additional Information</h3>
      <div className="form-section">
        <label>Upload Certifications/Degrees</label>
        <input type="file" />
      </div>
      <div className="form-section">
        <label>Profile Bio</label>
        <textarea placeholder="Write a short description about yourself" />
      </div>
      <div className="form-section">
        <label>References</label>
        <input type="text" placeholder="Enter Reference Details (Optional)" />
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

export default RegisterD