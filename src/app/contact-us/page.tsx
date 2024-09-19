"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await emailjs.send(
        "service_zbavbro", // Replace with your service ID
        "template_6kjb2yn", // Replace with your template ID
        formData,
        "1O8mE4IMY893YX35g" // Replace with your user ID
      );
      console.log("Email sent successfully:", response);
      setStatus("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg flex flex-col md:flex-row">
        {/* Left Side: Contact Form */}
        <div className="md:w-1/2 p-8 bg-[#1D1E20] text-white">
          <h1 className="text-3xl font-semibold mb-6 text-white">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full border-gray-600 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full border-gray-600 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-black"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="block w-full border-gray-600 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#C6F57A] border-2 border-[#C6F57A] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#a5d752] transition duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
            {status && (
              <div
                className={`mt-4 text-sm ${
                  status.includes("success") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>

        {/* Right Side: Information Section */}
        <div className="md:w-1/2 p-8 flex flex-col items-center md:items-start">
          <span className="text-sm font-medium bg-[#FBB331] text-black px-4 py-1 rounded-full">
            Grow Your Business
          </span>
          <h2 className="text-3xl font-semibold mt-4 mb-4 text-black">
            Contact Our Team
          </h2>
          <p className="text-lg text-gray-700 text-center md:text-left">
            Have questions or need assistance? Whether you’re looking to explore
            growth opportunities, enhance your revenue, or simply learn more
            about our services, our ECRYPT account managers are here to help.
            Reach out to integrate our efficient payment processing API,
            customize your payment flows, or for any other inquiries.
            Distinguish your business from the competition with our tailored
            solutions. Contact us today to see how we can support your needs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
