import React from 'react';
import { ImImages } from 'react-icons/im'; // Placeholder icon
import { FaPlay } from 'react-icons/fa';   // Play icon

const CourseCard = () => {
  const progress = 65;

  return (
    // Card container
    <div className="max-w-xs rounded-2xl bg-[#2a2a4a] p-0 overflow-hidden shadow-2xl text-white font-sans">
      
      {/* 1. Image Placeholder */}
      <div className="h-48 bg-gray-300/20 flex items-center justify-center">
        <ImImages className="text-5xl text-gray-400/50" />
      </div>

      {/* 2. Content Area */}
      <div className="p-6">
        
        {/* Title & Instructor */}
        <h3 className="text-xl font-bold text-white mb-1">
          Complete Web Development Bootcamp 2024
        </h3>
        <p className="text-sm text-gray-300/70 mb-5">
          Dr. Angela Yu
        </p>

        {/* Progress Info */}
        <div className="flex justify-between text-sm text-gray-300/70 mb-1">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-600/50 rounded-full h-2 mb-2">
          <div 
            className="bg-orange-500 h-2 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Lesson Count */}
        <p className="text-xs text-gray-300/70 mb-6">
          247 of 380 lessons completed
        </p>

        {/* Continue Button */}
        <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 
                           text-white font-semibold py-3 px-4 rounded-lg
                           flex items-center justify-center gap-2
                           transition-transform hover:scale-105 active:scale-100">
          <FaPlay />
          <span>Continue Learning</span>
        </button>

      </div>
    </div>
  );
};

export default CourseCard;