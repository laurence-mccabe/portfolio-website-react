import './Contact.css';
import deskSetupPic from '../../Image/deskSetup.jpg';
import { BsSendCheckFill } from 'react-icons/bs';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
    .then(() => {
      toast.success('Success!');
    })
    .catch((error) => {
      toast.error(error.message);
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  return (
    <Fade top>
      <div className="container contact-section" id="contact">
        <div className="row contact-row ">
          <div className="col-12 col-xl-6 contact-form-image">
            <img src={deskSetupPic} alt="contact-form-image" />
          </div>

          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 second-contact-col ">
            <div className="contact-me-header">Contact Me</div>

            <form
              className="contact-form"
              name="contact"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />

              <label className="form-label">Name</label>
              <input
                name="name"
                type="text"
                className="form-control contact-form input-field"
                value={formData.name}
                onChange={handleChange}
              />

              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control contact-form input-field"
                value={formData.email}
                onChange={handleChange}
              />

              <label className="form-label">Message</label>
              <textarea
                name="message"
                type="textbox"
                className="form-control input-field"
                value={formData.message}
                onChange={handleChange}
              />
              <div className="button-submit">
                <button type="submit" className="btn btn-primary">
                  Send&nbsp; <BsSendCheckFill size={15} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Contact;
