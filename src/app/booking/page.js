'use client';

import { useState } from 'react';

export default function BookingPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    date: '',
    time: '',
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
    setForm({
      name: '',
      email: '',
      company: '',
      date: '',
      time: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f8fb] py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-[#003153] text-center">Book a Demo Session</h1>
        <p className="mb-8 text-gray-600 text-center">
          Schedule a session with our team to see how NeoRD.AI can empower your business.
        </p>
        {submitted ? (
          <div className="text-green-600 text-center font-semibold">
            Thank you for booking a session! Our team will contact you soon to confirm your demo.
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
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message (optional)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
                placeholder="Let us know if you have any specific requirements."
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#1DA1F2] hover:bg-[#1991db] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DA1F2] font-semibold"
            >
              Book Session
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
