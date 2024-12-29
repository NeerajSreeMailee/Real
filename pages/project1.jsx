import { useState } from "react";
import Navbar from "../components/Navbar";
import Image from 'next/image';

const RealEstateProjectDetails = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/800x400?text=Exterior+View", // Replace with real image links
    "https://via.placeholder.com/800x400?text=Interior+Living+Room",
    "https://via.placeholder.com/800x400?text=Bedroom+View",
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        {/* Header Section */}
        <header className="text-white p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-bold">Dream Villas</h1>
            <span className="font-medium">Residential</span>
          </div>
        </header>

        {/* Image Gallery */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <div className="w-full h-80 overflow-hidden rounded-lg">
                <Image
                  src={images[imageIndex]}
                  alt="Property"
                  className="object-cover w-full h-full transition-all duration-500"
                  width={800}
                  height={400}
                />
              </div>
              <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 py-2">
                <button
                  onClick={() => setImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                  className="text-white bg-black bg-opacity-50 p-2 rounded-full"
                >
                  &#8592;
                </button>
                <button
                  onClick={() => setImageIndex((prev) => (prev + 1) % images.length)}
                  className="text-white bg-black bg-opacity-50 p-2 rounded-full"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
              <p className="text-gray-600 mt-4 text-lg">
                Modern homes with premium amenities and stunning views.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600">Spacious Living Area</h3>
                <p className="text-gray-600 mt-2">An open space perfect for relaxation and entertainment.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600">Modern Kitchen</h3>
                <p className="text-gray-600 mt-2">Fully equipped with high-end appliances for gourmet cooking.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600">Panoramic Views</h3>
                <p className="text-gray-600 mt-2">Enjoy breathtaking views from every room.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Financing */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center">Pricing</h2>
            <p className="text-center mt-4 text-lg">Starting at INR 1,500,000</p>
            <div className="mt-8 text-center">
              <a
                href="mailto:info@dreamvillas.com"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Contact Us for More Info
              </a>
            </div>
          </div>
        </section>

        {/* Property Location */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900">Location</h2>
            <div className="mt-6 flex justify-center items-center">
              <div className="relative w-full h-96 rounded-lg shadow-2xl overflow-hidden border-4 border-indigo-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.981091429065!2d83.32200497480715!3d17.734829287130155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943dd066e6c0b%3A0x854c5fed5de233b2!2sMK%20Tejus%20Apartments!5e0!3m2!1sen!2sin!4v1677866071427!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="object-cover"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MK Tejus Apartments"
                ></iframe>
                <div className="absolute inset-0 bg-black opacity-20 hover:opacity-30 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900">What Our Clients Say</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <p className="text-gray-600">This place is amazing! The design is top-notch, and the views are stunning!</p>
                <h4 className="mt-4 text-xl font-semibold text-blue-600">John Doe</h4>
                <p className="text-gray-500">Homebuyer</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <p className="text-gray-600">I love the neighborhood and the modern amenities! Truly a dream home!</p>
                <h4 className="mt-4 text-xl font-semibold text-blue-600">Jane Smith</h4>
                <p className="text-gray-500">Resident</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <p className="text-gray-600">Excellent customer service, and the property is beyond my expectations!</p>
                <h4 className="mt-4 text-xl font-semibold text-blue-600">Robert Johnson</h4>
                <p className="text-gray-500">Investor</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default RealEstateProjectDetails;