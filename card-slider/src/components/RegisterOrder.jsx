import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./RegisterOrder.css";

const RegisterOrder = () => {
  const { state: template } = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    imagesNeeded: "",
    eventDate: "",
  });

  if (!template) {
    return <p className="loading">No template selected</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      templateId: template.id,
      templateName: template.name,
      templatePrice: template.price,
    };

    console.log("Order Data:", dataToSend);
    alert("Order submitted!");
    
  };

  return (
    <div className="register-order-page" id="register-order">
      <div className="form-container">
        <h2>Register Order</h2>

        <div className="template-info">
          <p>
            <strong>Template:</strong> {template.name}
          </p>
          <p>
            <strong>Price:</strong> ${template.price}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Images Needed:
            <input
              type="text"
              name="imagesNeeded"
              value={formData.imagesNeeded}
              onChange={handleChange}
              placeholder="e.g., 5 images, 1 logo..."
            />
          </label>

          <label>
            Date of Event:
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Submit Order</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterOrder;
