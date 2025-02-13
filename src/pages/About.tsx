import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function About() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleUpVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/slider1.jpg"
            alt="Resort exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative text-center text-white z-10"
        >
          <h1 className="text-6xl font-bold mb-4">About Us</h1>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-20">
        <div ref={ref}>
          <motion.div
            variants={scaleUpVariant}
            initial="hidden"
            animate={controls}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-3">Our Story</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
          </motion.div>

          {/* First Paragraph with Image */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={controls}
            className="flex flex-col md:flex-row items-center gap-12 mb-20"
          >
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-blue-500/10 transform rotate-3 rounded-lg" />
              <p className="relative bg-white p-8 text-lg leading-relaxed shadow-lg rounded-lg">
                Esakki High View Resorts, a paradise for nature lovers, is located near Five Falls
                and Old Courtallam Falls, just 500 meters from Old Falls. Surrounded by the scenic
                Western Ghats, the resort offers a tranquil escape with fresh mountain air, lush
                greenery, and vibrant flowers.
              </p>
            </div>
            <motion.div
              className="md:w-1/2 h-[300px] rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/slider2.jpg" alt="Resort view" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Location Section */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={controls}
            className="bg-gradient-to-r from-blue-500/10 to-green-500/10 p-12 rounded-2xl mb-20"
          >
            <h3 className="text-3xl font-semibold mb-6 text-center">Location</h3>
            <p className="text-lg leading-relaxed text-center max-w-2xl mx-auto">
              Situated along the Five Falls Main Road in Courtallam, our resort offers breathtaking
              views of the surrounding landscape.
            </p>
          </motion.div>

          {/* Commitment Section */}
          <motion.div
            variants={scaleUpVariant}
            initial="hidden"
            animate={controls}
            className="text-center"
          >
            <h3 className="text-3xl font-semibold mb-8">Our Commitment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Providing exceptional hospitality and personalized service",
                "Maintaining the highest standards of cleanliness and comfort",
                "Preserving the natural beauty of our surroundings",
                "Creating memorable experiences for our guests",
              ].map((commitment, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.03 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } },
                  }}
                  initial="hidden"
                  animate={controls}
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full" />
                  </div>
                  <p className="text-lg">{commitment}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
