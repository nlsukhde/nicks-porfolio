"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send a message");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
        setButtonText("Sent"); // Update button text to "Sent"
        // Optionally, reset the button text back to "Send a message" after a few seconds:
        setTimeout(() => setButtonText("Send a message"), 3000);
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-black-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-black-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="Your message"
          name="message"
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-black-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button
        type="submit"
        className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default ContactForm;
