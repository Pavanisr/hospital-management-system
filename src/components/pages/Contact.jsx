import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or email service
    console.log(formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="container my-5" id='Contact'>

<div className='container'>

<a href='#' className="gallery-text"><h2>Contact Us<br/></h2></a>

</div>
      <div className="row">
        <div className="col-md-6 p-4 contact-pic">
          <div className='overlay'>
          <h3>Address</h3>
          <p>No. 578,
              Elvitigama Mawatha,
              Narahenpita,
              Colombo 09,
              Sri Lanka</p>
          <h3>Lets Talk</h3>
          <p>011 543 0000</p>
          <h3>General Support</h3>
          <p>info@medihospitals.com </p>
          </div>
        </div>
        <div className="col-md-6 p-4">
          <h3 className='font-color'>Send Us A Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="form-control"
                onChange={handleChange}
                value={formData.firstName}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="form-control"
                onChange={handleChange}
                value={formData.lastName}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Eg. example@email.com"
                className="form-control"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                name="phone"
                placeholder="Eg. +94 77 3464 777"
                className="form-control"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Write us a message"
                className="form-control"
                onChange={handleChange}
                value={formData.message}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
