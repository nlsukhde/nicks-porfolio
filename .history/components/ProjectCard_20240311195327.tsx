// ProjectCard.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  image: string;
  title: string;
  text: string;
  url: string; // Add this prop for the project URL
}

const ProjectCard = ({ image, title, text, url }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="w-[450px] h-[280px] rounded-md cursor-pointer"
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* Front of the Card */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="flip-card-front group relative w-full h-full bg-cover bg-center rounded-lg p-4"
        >
          {/* ... Front content ... */}
        </div>

        {/* Back of the Card */}
        <div className="flip-card-back group relative w-full h-full bg-cover bg-center rounded-lg p-4">
          <div className="absolute inset-0 w-full h-full bg-black opacity-50 rounded-md z-[-1]" />
          <div className="flex flex-col gap-20 py-3 z-[30] items-center justify-center">
            <h1 className="text-white text-2xl font-semibold">{title}</h1>
            <p className="text-gray-200 text-[20px]">{text}</p>
            <Link href={url}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                View Project
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
