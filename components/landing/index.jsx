import { useEffect, useRef, useState } from "react";
import Image from "next/image";
<<<<<<< HEAD
import Link from "next/link";
=======
>>>>>>> d981ea4 (Initial commit or your custom message)

// Replace with your 7 new image paths
const SlideImage1 = require("../../assets/slide1.png");
const SlideImage2 = require("../../assets/slide2.jpeg");
const SlideImage3 = require("../../assets/slide3.jpeg");
const SlideImage4 = require("../../assets/slide4.png");
const SlideImage5 = require("../../assets/slide5.jpeg");
const SlideImage6 = require("../../assets/slide6.jpeg");
const SlideImage7 = require("../../assets/slide7.png");

const LandingSection = () => {
  const scrollRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

<<<<<<< HEAD
    const maxLoops = 3; // Number of loops
    let currentLoop = 0;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        // Scroll right by the width of one slide
        scrollRef.current.scrollBy({
          left: window.innerWidth,
          behavior: "smooth",
        });

        // Reset scroll position after the last slide
        if (scrollRef.current.scrollLeft >= window.innerWidth * 7) {
          currentLoop += 1;
          if (currentLoop >= maxLoops) {
            clearInterval(interval); // Stop after the specified number of loops
          } else {
            setTimeout(() => {
              scrollRef.current.scrollLeft = 0; // Reset to the first slide after a short delay
            }, 500); // Delay before resetting
          }
        }
      }
    }, 3000); // Auto-scroll every 3 seconds
=======
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const totalWidth = scrollRef.current.scrollWidth; // Total width of all slides combined
        const slideWidth = window.innerWidth; // Each slide's width (since all slides are of equal width)
        const currentScroll = scrollRef.current.scrollLeft; // Current scroll position

        // Scroll by the width of one slide
        const nextScroll = currentScroll + slideWidth;

        // If the scroll reaches the end of all slides, reset it to the beginning (creating infinite scroll)
        if (nextScroll >= totalWidth) {
          scrollRef.current.scrollLeft = 0; // Reset to the first slide
        } else {
          scrollRef.current.scrollLeft = nextScroll; // Scroll to the next slide
        }
      }
    }, 2000); // Scroll every 2 seconds
>>>>>>> d981ea4 (Initial commit or your custom message)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isClient]);

  return (
<<<<<<< HEAD
    <section className="relative flex justify-center items-center bg-cover bg-center pt-12">
      {isClient && (
        <div
          ref={scrollRef}
          className="flex w-full overflow-x-hidden h-[600px] sm:h-[500px] md:h-[550px]"
        >
          {/* Adjusted Slides */}
          <div className="w-full flex-shrink-0 flex justify-center items-center">
            <Image
              src={SlideImage1}
              alt="Slide 1"
              className="rounded-lg"
              layout="intrinsic"
              width={1470}
              height={600}
              objectFit="cover"
            />
          </div>
          <div className="w-full flex-shrink-0 flex justify-center items-center">
            <Image
              src={SlideImage2}
              alt="Slide 2"
              className="rounded-lg"
              layout="intrinsic"
              width={1470}
              height={600}
              objectFit="cover"
            />
          </div>
          <div className="w-full flex-shrink-0 flex justify-center items-center">
            <Image
              src={SlideImage3}
              alt="Slide 3"
              className="rounded-lg"
              layout="intrinsic"
              width={1470}
              height={600}
              objectFit="cover"
            />
          </div>
          <div className="w-full flex-shrink-0 flex justify-center items-center">
            <Image
              src={SlideImage4}
              alt="Slide 4"
              className="rounded-lg"
              layout="intrinsic"
              width={1470}
              height={600}
              objectFit="cover"
            />
          </div>
          <div className="w-full flex-shrink-0 flex justify-center items-center">
            <Image
              src={SlideImage5}
              alt="Slide 5"
              className="rounded-lg"
              layout="intrinsic"
              width={1470}
              height={600}
              objectFit="cover"
            />
          </div>
          <div className="w-full flex-shrink-0 flex justify-center items-center">
            <Image
              src={SlideImage6}
              alt="Slide 6"
              className="rounded-lg"
              layout="intrinsic"
              width={1470}
              height={600}
              objectFit="cover"
            />
          </div>
          <div className="w-full flex-shrink-0 flex justify-center items-center">
            <Image
              src={SlideImage7}
              alt="Slide 7"
              className="rounded-lg"
              layout="intrinsic"
              width={1470}
              height={600}
              objectFit="cover"
            />
=======
    <section className="relative flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 pt-0 mt-0 overflow-hidden">
      {isClient && (
        <div
          ref={scrollRef}
          className="flex w-full overflow-x-hidden h-screen" // Full viewport height
        >
          {/* Slide Container */}
          <div className="w-full flex-shrink-0 flex justify-center items-center relative group transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-xl">
            <Image
              src={SlideImage1}
              alt="Slide 1"
              className="rounded-xl object-cover w-full h-full"
              layout="intrinsic"
              width={1470}
              height={580}  // Fixed size 1470x580
            />
            {/* Optional Text Overlay */}
            <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-30 rounded-xl">
              <h2 className="text-4xl font-semibold">Welcome to Our World</h2>
            </div>
          </div>
          
          <div className="w-full flex-shrink-0 flex justify-center items-center relative group transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-xl">
            <Image
              src={SlideImage2}
              alt="Slide 2"
              className="rounded-xl object-cover w-full h-full"
              layout="intrinsic"
              width={1470}
              height={580}  // Fixed size 1470x580
            />
            <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-30 rounded-xl">
              <h2 className="text-4xl font-semibold">Explore New Horizons</h2>
            </div>
          </div>
          
          <div className="w-full flex-shrink-0 flex justify-center items-center relative group transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-xl">
            <Image
              src={SlideImage3}
              alt="Slide 3"
              className="rounded-xl object-cover w-full h-full"
              layout="intrinsic"
              width={1470}
              height={580}  // Fixed size 1470x580
            />
            <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-30 rounded-xl">
              <h2 className="text-4xl font-semibold">Join Us Today</h2>
            </div>
          </div>

          <div className="w-full flex-shrink-0 flex justify-center items-center relative group transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-xl">
            <Image
              src={SlideImage4}
              alt="Slide 4"
              className="rounded-xl object-cover w-full h-full"
              layout="intrinsic"
              width={1470}
              height={580}  // Fixed size 1470x580
            />
            <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-30 rounded-xl">
              <h2 className="text-4xl font-semibold">Inspire & Innovate</h2>
            </div>
          </div>

          <div className="w-full flex-shrink-0 flex justify-center items-center relative group transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-xl">
            <Image
              src={SlideImage5}
              alt="Slide 5"
              className="rounded-xl object-cover w-full h-full"
              layout="intrinsic"
              width={1470}
              height={580}  // Fixed size 1470x580
            />
            <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-30 rounded-xl">
              <h2 className="text-4xl font-semibold">Your Adventure Starts Here</h2>
            </div>
          </div>

          <div className="w-full flex-shrink-0 flex justify-center items-center relative group transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-xl">
            <Image
              src={SlideImage6}
              alt="Slide 6"
              className="rounded-xl object-cover w-full h-full"
              layout="intrinsic"
              width={1470}
              height={580}  // Fixed size 1470x580
            />
            <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-30 rounded-xl">
              <h2 className="text-4xl font-semibold">Experience Excellence</h2>
            </div>
          </div>

          <div className="w-full flex-shrink-0 flex justify-center items-center relative group transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-xl">
            <Image
              src={SlideImage7}
              alt="Slide 7"
              className="rounded-xl object-cover w-full h-full"
              layout="intrinsic"
              width={1470}
              height={580}  // Fixed size 1470x580
            />
            <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-30 rounded-xl">
              <h2 className="text-4xl font-semibold">Unlock Potential</h2>
            </div>
>>>>>>> d981ea4 (Initial commit or your custom message)
          </div>
        </div>
      )}
    </section>
  );
};

export { LandingSection };