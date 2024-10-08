import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

function Contact() {
  const form = useRef();
  const contactSection = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iik776g', 'template_bnf77pn', form.current, {
      publicKey: 'ew7Q7ippcfXG7lU7V',
    })
      .then((result) => {
        toast.success('Email sent successfully!', {
          position: "bottom-center",
        });
      }, (error) => {
        toast.error('Failed to send email. Please try again.', {
          position: "bottom-center",
        });
      });

    e.target.reset();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (contactSection.current) {
        const sectionTop = contactSection.current.offsetTop;
        if (window.scrollY > sectionTop - 250) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={contactSection} className="section contact" id="contact">
      <h2 className="section-title">Get in touch</h2>
      <span className="section-subtitle">Contact Me</span>
      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Contact Me</h3>
          <div className="contact-info">
            <div className={isScrolled ? "contact-card animate-delay-left-1" : "contact-card"}>
              <i className="bx bx-mail-send contact-card-icon"></i>
              <div className="contact-card-title">Email</div>
              <span className="contact-card-data">
                ahmedkamalyoussef4@gmail.com
              </span>
              <a
                href="mailto:ahmedkamalyoussef4@gmail.com"
                target="_blank"
                className="contact-button"
                rel="noreferrer"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>
            <div className={isScrolled ? "contact-card animate-delay-left-2" : "contact-card"}>
              <i className="bx bxl-whatsapp contact-card-icon"></i>
              <div className="contact-card-title">Whatsapp</div>
              <span className="contact-card-data">+201001462439</span>
              <a
                href="https://api.whatsapp.com/send?phone=+201001462439&text=hello , more information"
                className="contact-button"
                target="_blank"
                rel="noreferrer"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>
            <div className={isScrolled ? "contact-card animate-delay-left-3" : "contact-card"}>
              <i className="bx bxl-messenger contact-card-icon"></i>
              <div className="contact-card-title">Messenger</div>
              <span className="contact-card-data">Ahmed Kamal</span>
              <a href="https://m.me/100028844448220" className="contact-button" target="_blank" rel="noreferrer">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-content">
          <h3 className="contact-title">Write me your project</h3>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className={isScrolled ? "contact-form-div animate-delay-1" : "contact-form-div"}>
              <label className="contact-form-tag">Name</label>
              <input
                type="text"
                className="contact-form-input"
                name="name"
                placeholder="Insert your name"
                required
              />
            </div>
            <div className={isScrolled ? "contact-form-div animate-delay-2" : "contact-form-div"}>
              <label className="contact-form-tag">Email</label>
              <input
                type="email"
                className="contact-form-input"
                name="email"
                placeholder="Insert your Mail"
                required
              />
            </div>
            <div className={isScrolled ? "contact-form-div contact-form-area animate-delay-3" : "contact-form-div"}>
              <label className="contact-form-tag">Project</label>
              <textarea
                name="project"
                cols={30}
                rows={10}
                className="contact-form-input"
                placeholder="Write your project"
                required
              ></textarea>
            </div>
            <button type="submit" className="button button-flex">
              Send &nbsp;
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Contact;
