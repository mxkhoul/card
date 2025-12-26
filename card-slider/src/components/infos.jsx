
import "swiper/css";
import "./CardSlider.css";
import { useState } from "react";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
 const faqs = [
  {
    question: "How do I register for an event?",
    answer:
      "Simply click on the 'Register Now' button in the navbar on the event page and follow the easy steps to secure your spot!",
  },
  {
    question: "Can I customize my event package?",
    answer:
      "Absolutely! We offer a range of customization options to tailor your event to your preferences and needs.",
  },
  {
    question: "What types of events do you plan?",
    answer:
      "From extravagant galas to intimate gatherings, we specialize in creating unforgettable experiences for all occasions.",
  },
  {
    question: "Do you provide event coordination services?",
    answer:
      "Yes, our expert team will handle every detail to ensure your event runs smoothly from start to finish.",
  },
];


export default function Infos() {
    const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="infos-1">
      <div className="infos-2">
    <div className="title">
        <h2>What do you need to create a wedding invitation e-card?</h2>
    </div>
    <div className="ull">
  <ul>
    <li>4 - 5 nice photos of the couple</li>
    <li>Bride's full name</li>
    <li>Groom's full name</li>
    <li>Wedding date</li>
    <li>Wedding ceremony location and time (optional)</li>
    <li>Wedding party location and time (optional)</li>
    <li>Email address</li>
    <li>Phone number</li>
  </ul>
</div>

        </div>
        
<div className="faq-section fade">
  {faqs.map((item, index) => (
    <div className="faq-item" key={index}>
      
      <button
        className={`faq-btn ${openIndex === index ? "active" : ""}`}
        onClick={() =>
          setOpenIndex(openIndex === index ? null : index)
        }
      >
        <span>{item.question}</span>
        {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {openIndex === index && (
        <div className="faq-content">
          {item.answer}
        </div>
      )}

    </div>
  ))}
</div>
{/* Stats Section */} 

<div className="stats-section">
  <div className="stat">
    <h2>4K+</h2>
    <p>Happy Attendees</p>
  </div>
  <div className="stat">
    <h2>80+</h2>
    <p>Successful Events</p>
  </div>
  <div className="stat">
    <h2>95%</h2>
    <p>Customer Satisfaction</p>
  </div>
</div>

{/* Contact Section */}
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
