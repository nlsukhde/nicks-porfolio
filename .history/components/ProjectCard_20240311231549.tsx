"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  text: string;
  url: string;
}

const ProjectCard = ({ image, title, text, url }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip(e: React.MouseEvent) {
    // Prevent the flip if a link was clicked
    if ((e.target as Element).tagName === "A") {
      return;
    }
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
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* Front of the Card */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="flip-card-front group relative w-full h-full bg-cover bg-center rounded-lg p-4"
        >
          {/* Increase the opacity here for darker overlay */}
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-60 group-hover:opacity-70 transition-opacity duration-300" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center justify-center text-white font-bold">
            Learn more &gt;
          </div>
        </div>

        {/* Back of the Card */}
        <div className="flip-card-back group relative w-full h-full bg-cover bg-center rounded-lg p-4">
          <div className="absolute inset-0 w-full h-full bg-black opacity-50 rounded-md" />
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <h1 className="text-white text-2xl font-semibold">{title}</h1>
            <p className="text-gray-200 text-center">{text}</p>
            {/* Use an <a> tag directly for the link */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              onClick={(e) => e.stopPropagation()} // Prevent the flip action when clicking the button
            >
              View Project
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
