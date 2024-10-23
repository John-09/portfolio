import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-wrap">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: index * 0.05 }}
          className="text-4xl font-bold text-gray-800"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

const IntroSection = () => {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAbout(true), 2000); // Show about after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-6xl mx-auto">
      <div className="md:w-1/2 pt-8">
        <AnimatedText text="Hi, I am John sam," />
        <motion.h2
          className="text-3xl font-semibold text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          Software Engineer
        </motion.h2>
      </div>
      <motion.div
        className="md:w-1/2 mt-4 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: showAbout ? 1 : 0, x: showAbout ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-800">
          I am a passionate Software Engineer with hands-on experience in
          full-stack development using technologies like Node.js, Angular.js,
          React.js, and TypeScript. I specialize in building scalable web
          applications, managing backend systems, and creating efficient tools
          to streamline business operations. My focus is on delivering
          high-quality software solutions that meet business objectives while
          enhancing user experiences.
        </p>
      </motion.div>
    </div>
  );
};

export default function Portfolio() {
  return (
    <div className="flex items-center justify-center pt-16">
      <IntroSection />
    </div>
  );
}
