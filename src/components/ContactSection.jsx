import React from 'react';

const ContactSection = () => (
  <section id="contact" className="bg-gray-900 text-white py-20">
    <div className="container mx-auto text-center space-y-6">
      <h2 className="text-4xl font-bold">Contact</h2>
      <p className="text-lg">
        Let’s work together! Reach out to me for collaborations or inquiries.
      </p>
      <form
        action="#"
        method="post"
        className="max-w-xl mx-auto space-y-4 mt-8"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded bg-gray-800 border border-gray-700 text-white"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded bg-gray-800 border border-gray-700 text-white"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-4 rounded bg-gray-800 border border-gray-700 text-white h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full p-4 rounded bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
