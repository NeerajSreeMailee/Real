import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaCogs, FaBuilding, FaTag } from "react-icons/fa";
<<<<<<< HEAD
import Navbar from "../components/Navbar";

// Slide Component
const Slide = ({ src, alt }) => (
  <div className="w-full flex-shrink-0 flex justify-center items-center transition-transform transform hover:scale-105">
    <Image
      src={src}
      alt={alt}
      className="rounded-lg"
      layout="intrinsic"
      width={1470}
      height={600}
=======
import Navbar from "../components/Navbar";  // Assuming Navbar component is correct

// LandingSlide Component for the image slider
const LandingSlide = ({ src, alt }) => (
  <div className="w-full flex-shrink-0 flex justify-center items-center transition-transform transform hover:scale-110">
    <Image
      src={src}
      alt={alt}
      className="rounded-xl shadow-xl transition-all duration-500 transform hover:scale-105"
      width={1470}
      height={580}
>>>>>>> d981ea4 (Initial commit or your custom message)
      objectFit="cover"
    />
  </div>
);

<<<<<<< HEAD
// Feature Box Component
const FeatureBox = ({ icon: Icon, title, description }) => (
  <div className="p-6 transition-all transform hover:scale-105 bg-white rounded-lg shadow-xl">
    <div className="flex items-center mb-4">
      <Icon className="text-4xl text-blue-900 mr-4 transition-all transform hover:scale-110" />
      <h4 className="text-blue-900 text-xl font-bold">{title}</h4>
    </div>
    <p className="text-blue-800 text-lg">{description}</p>
  </div>
);

// Main Project Page Component
=======
// FeatureBox Component to display project features
const FeatureBox = ({ icon: Icon, title, description }) => (
  <div className="p-8 transition-all transform hover:scale-105 bg-white rounded-3xl shadow-2xl hover:shadow-3xl">
    <div className="flex items-center mb-6">
      <Icon className="text-5xl text-blue-600 mr-6 transition-all transform hover:scale-110 hover:text-blue-800" />
      <h4 className="text-2xl font-semibold text-blue-900">{title}</h4>
    </div>
    <p className="text-blue-700 text-lg">{description}</p>
  </div>
);

// Main ProjectPage Component
>>>>>>> d981ea4 (Initial commit or your custom message)
const ProjectPage = () => {
  const scrollRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const maxLoops = 3;
    let currentLoop = 0;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });

        if (scrollRef.current.scrollLeft >= window.innerWidth * 5) {
          currentLoop += 1;
          if (currentLoop >= maxLoops) {
            clearInterval(interval);
          } else {
            setTimeout(() => {
              scrollRef.current.scrollLeft = 0;
            }, 500);
          }
        }
      }
<<<<<<< HEAD
    }, 3000);
=======
    }, 2000);  // Scroll every 2 seconds for infinite loop
>>>>>>> d981ea4 (Initial commit or your custom message)

    return () => clearInterval(interval);
  }, [isClient]);

<<<<<<< HEAD
  const slides = [
    { src: "/assets/project1.avif", alt: "Slide 1" },
    { src: "/assets/project2.avif", alt: "Slide 2" },
    { src: "/assets/project3.avif", alt: "Slide 3" },
    { src: "/assets/project4.jpeg", alt: "Slide 4" },
    { src: "/assets/project5.jpeg", alt: "Slide 5" },
  ];

=======
  // Image slides (use the correct paths for public assets)
  const slides = [
    { src: "/assets/keyboard.png", alt: "Slide 1" },
    { src: "/assets/keyboard1.png", alt: "Slide 2" },
    { src: "/assets/keyboard2.png", alt: "Slide 3" },
    { src: "/assets/keyboard3.png", alt: "Slide 4" },
    { src: "/assets/keyboard4.png", alt: "Slide 5" },
  ];

  // Project features
>>>>>>> d981ea4 (Initial commit or your custom message)
  const features = [
    { icon: FaBuilding, title: "Project Name", description: "MK Tejus Apartments" },
    { icon: FaCogs, title: "Features", description: "Spacious, 3 Bedrooms, 2 Bathrooms" },
    { icon: FaMapMarkerAlt, title: "Location", description: "Pithapuram Colony, Visakhapatnam" },
    { icon: FaTag, title: "Price", description: "INR 25,00,000" },
  ];

  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <section className="bg-[#c5deff] py-12 mt-12"> {/* Added mt-12 to give space between Navbar and content */}
        {/* Image Slider Section */}
        <section className="relative flex justify-center items-center bg-cover bg-center pt-12">
          {isClient && (
            <div ref={scrollRef} className="flex w-full overflow-x-hidden h-[400px] md:h-[600px]">
              {slides.map((slide, index) => (
                <Slide key={index} src={slide.src} alt={slide.alt} />
=======
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16 mt-16 relative">
        {/* Image Slider Section with Animation */}
        <section className="relative flex justify-center items-center bg-cover bg-center pt-12">
          {isClient && (
            <div ref={scrollRef} className="flex w-full overflow-x-hidden h-[500px] md:h-[700px] rounded-xl shadow-lg">
              {slides.map((slide, index) => (
                <LandingSlide key={index} src={slide.src} alt={slide.alt} />
>>>>>>> d981ea4 (Initial commit or your custom message)
              ))}
            </div>
          )}
        </section>

        {/* Project Information Section */}
        <section className="grid grid-cols-1 gap-12 mt-16 px-4 md:px-8">
<<<<<<< HEAD
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-blue-900 mb-12 transition-all transform hover:scale-105">
            About the Project
          </h2>
          <div className="p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-6">
              Key Features
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
=======
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-12 transition-all transform hover:scale-105">
            About the Project
          </h2>
          <div className="p-6 md:p-10 bg-white shadow-2xl rounded-3xl">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-6">
              Key Features
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> d981ea4 (Initial commit or your custom message)
              {features.map((feature, index) => (
                <FeatureBox
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>
      </section>
<<<<<<< HEAD
=======

      {/* Dynamic Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-pink-300 to-purple-400 opacity-30 z-[-1] animate-pulse"></div>
>>>>>>> d981ea4 (Initial commit or your custom message)
    </>
  );
};

export default ProjectPage;