"use client";

import React, { useState } from "react";

const [toast, setToast] = useState({ show: false, message: "", type: "" });

const showToast = (message, type = "success") => {
  setToast({ show: true, message, type });
  setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000); // Hide after 3 seconds
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
        showToast("Message sent successfully!", "success");
        // Reset form fields
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      showToast((error as Error).message, "error");
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
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
