'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend or API route
    // For now, we'll just show a success message
    setSubmitted(true);
    setForm({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f8fb] py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-[#003153] text-center">Contact Sales</h1>
        <p className="mb-8 text-gray-600 text-center">
          Have a question or want to get in touch with our sales team? Fill out the form below and we'll get back to you soon.
        </p>
        {submitted ? (
          <div className="text-green-600 text-center font-semibold">
            Thank you for contacting us! Our sales team will reach out to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#1DA1F2] hover:bg-[#1991db] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DA1F2] font-semibold"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}