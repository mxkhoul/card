import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Infos.css";

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>

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
    </section>
  );
}
