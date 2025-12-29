import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <div>
         <h2 className="ititle">Get in Touch</h2>
    <div className="contact-section">
    

  <div className="contact-card">
    <h3>Phone</h3>
    <p>+961 71 87 36 34</p>
  </div>
  <div className="contact-card">
    <h3>Email</h3>
    <p>eventastic.cc@outlook.com</p>
  </div>
  <div className="contact-card">
    <h3>Address</h3>
    <p>Beirut, Lebanon</p>
  </div>
  <div className="contact-card">
    <h3>Opening Hours</h3>
    <p>Mon-Fri: 9am-6pm</p>
  </div>

    </div>
    </div>
  );
}
