import './Contact.css'
import deskSetupPic from '../../Image/deskSetup.jpg'
import { BsSendCheckFill } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className="container-fluid contact-page-container" id="contact">
      {/* <div className="contact-form-design" >
        <div className="text-center">
          <h5>Contact Me</h5>
          <span className="line"></span>
        </div>
      </div> */}
      <div className="row ">
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
          <div className="contact-form-image">
            <img src={deskSetupPic} alt="contact-form-image" />
          </div>
        </div>

        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 ">
          <div className="contact-me-header">Contact Me</div>

          <form className="contact-form">
            <label className="form-label">Name</label>
            <input type="text" className="form-control contact-form"></input>
            
            <label className="form-label">Email</label>
            <input type="text" className="form-control contact-form"></input>
            
            <label className="form-label">Message</label>
            <textarea type="textbox" className="form-control"></textarea>
            <div className="button-submit">
              <p type="submit" className="btn btn-primary">
                Send&nbsp; <BsSendCheckFill size={15} />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
