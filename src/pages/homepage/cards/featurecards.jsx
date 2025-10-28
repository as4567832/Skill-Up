function FeatureCards() {
  return (
    <div className="flex  flex-col items-center justify-center text-center text-white bg-[#0B0D17]">
      <div className="max-w-sm hover:shadow-[0px_0px_10px_10px_rgba(147,51,234,0.8)] p-8 bg-[#10131F] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
        <div className="flex items-center p-5 justify-center w-12 h-12 mx-auto mb-4 text-lg font-bold text-white bg-gradient-to-b from-purple-600 to-blue-600 rounded-full shadow-md">
          1
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-blue-400">Expert Instructors</h2>
        <p className="text-gray-400 text-base">
          Learn from industry professionals with years of real-world experience.
        </p>
      </div>
    </div>
  );
}

export default FeatureCards;
