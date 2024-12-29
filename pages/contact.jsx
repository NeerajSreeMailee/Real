import { useState } from "react";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
<<<<<<< HEAD
=======
    // Here you can add form submission logic, e.g., send data to an API
>>>>>>> d981ea4 (Initial commit or your custom message)
  };

  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <section className="bg-[#c5deff] py-12 mt-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Column */}
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-blue-900"
=======
      <section className="bg-gradient-to-r from-blue-200 to-indigo-400 py-16 mt-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Column */}
            <div className="flex justify-center items-center">
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg space-y-6"
              >
                <h2 className="text-3xl font-semibold text-center text-blue-800 mb-8">
                  Get in Touch with Us
                </h2>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-xl font-medium text-blue-700"
>>>>>>> d981ea4 (Initial commit or your custom message)
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
<<<<<<< HEAD
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-blue-900"
=======
                    className="w-full p-4 mt-2 border-2 border-blue-500 rounded-lg bg-[#e3f2fd] focus:ring-2 focus:ring-blue-300 text-lg focus:outline-none transition duration-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-xl font-medium text-blue-700"
>>>>>>> d981ea4 (Initial commit or your custom message)
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
<<<<<<< HEAD
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-blue-900"
=======
                    className="w-full p-4 mt-2 border-2 border-blue-500 rounded-lg bg-[#e3f2fd] focus:ring-2 focus:ring-blue-300 text-lg focus:outline-none transition duration-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-xl font-medium text-blue-700"
>>>>>>> d981ea4 (Initial commit or your custom message)
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
<<<<<<< HEAD
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                    rows="4"
=======
                    className="w-full p-4 mt-2 border-2 border-blue-500 rounded-lg bg-[#e3f2fd] focus:ring-2 focus:ring-blue-300 text-lg focus:outline-none transition duration-300"
                    rows="6"
>>>>>>> d981ea4 (Initial commit or your custom message)
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
<<<<<<< HEAD
                  className="w-full bg-blue-900 text-white py-3 rounded-lg"
=======
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-lg hover:scale-105 transform transition-all duration-300 shadow-lg"
>>>>>>> d981ea4 (Initial commit or your custom message)
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Map Column */}
<<<<<<< HEAD
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.981091429065!2d83.32200497480715!3d17.734829287130155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943dd066e6c0b%3A0x854c5fed5de233b2!2sMK%20Tejus%20Apartments!5e0!3m2!1sen!2sin!4v1677866071427!5m2!1sen!2sin"
                width="100%"
                height="300"
                className="rounded-lg border-0"
=======
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.981091429065!2d83.32200497480715!3d17.734829287130155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943dd066e6c0b%3A0x854c5fed5de233b2!2sMK%20Tejus%20Apartments!5e0!3m2!1sen!2sin!4v1677866071427!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="rounded-lg shadow-lg border-4 border-indigo-300"
>>>>>>> d981ea4 (Initial commit or your custom message)
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MK Tejus Apartments"
              ></iframe>
<<<<<<< HEAD
=======
              {/* Light blue gradient overlay for a soft look */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-200 opacity-40"></div>
>>>>>>> d981ea4 (Initial commit or your custom message)
            </div>
          </div>

          {/* Reach Out Section */}
<<<<<<< HEAD
          <div className="mt-12 bg-blue-900 text-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold mb-4">Reach Out</h2>
            <p className="text-lg mb-4">
              Feel free to get in touch with us. We are always available to
              assist you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-2">Our Location</h3>
                <p>VDC, Gitam Visakhapatnam</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Email</h3>
                <p>socialmydiyas@gmail.com</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Phone</h3>
                <p>+91 8985250220</p>
                <p>+91 9494259453</p>
                <p>Call us Toll Free: +91 9494259453</p>
=======
          <div className="mt-16 bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Reach Out to Us
            </h2>
            <p className="text-lg mb-6 text-center">
              We are here to help! Feel free to contact us for inquiries or
              assistance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <div className="text-lg">
                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                <p>VDC, Gitam Visakhapatnam</p>
              </div>
              <div className="text-lg">
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p>
                  <a
                    href="mailto:socialmydiyas@gmail.com"
                    className="underline text-blue-300"
                  >
                    socialmydiyas@gmail.com
                  </a>
                </p>
              </div>
              <div className="text-lg">
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p>
                  <a
                    href="tel:+919898525022"
                    className="underline text-blue-300"
                  >
                    +91 8985250220
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+919494259453"
                    className="underline text-blue-300"
                  >
                    +91 9494259453
                  </a>
                </p>
>>>>>>> d981ea4 (Initial commit or your custom message)
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Bottom Section */}
          <div className="mt-12 bg-[#f0f0f0] p-8 rounded-lg shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-lg flex-1">
              <h3 className="text-2xl font-semibold mb-4">
                Would you like to start a project with us?
              </h3>
              <p>
                Let’s work together to create something amazing! Call us now
                and take the first step toward transforming your vision into
                reality.
              </p>
            </div>
            <div className="text-lg font-bold text-blue-900 flex flex-col sm:flex-row items-center gap-4">
              <p>Call us at</p>
=======
          {/* Bottom Section with enhanced design */}
          <div className="mt-16 bg-gradient-to-r from-blue-300 to-indigo-500 p-16 rounded-lg shadow-2xl flex flex-col items-center justify-center text-center space-y-6">
            <h3 className="text-4xl font-bold text-white mb-4">
              Ready to start a project?
            </h3>
            <p className="text-xl text-white mb-8 max-w-xl mx-auto">
              Let us bring your ideas to life! Contact us today, and let us
              create something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <p className="text-lg text-white">Call us at</p>
>>>>>>> d981ea4 (Initial commit or your custom message)
              <a
                href="https://wa.me/919494259453"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition"
=======
                className="bg-green-500 text-white py-4 px-8 rounded-lg hover:bg-green-600 transform transition-all duration-300"
>>>>>>> d981ea4 (Initial commit or your custom message)
              >
                +91 9494259453
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;