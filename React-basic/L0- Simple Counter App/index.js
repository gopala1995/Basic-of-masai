import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm w-full border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 font-inter">
          Simple Counter
        </h1>

        <p className="text-7xl font-bold mb-8 text-blue-700 tracking-wide">
          {count}
        </p>

        {count === 10 && (
          <p className="text-xl font-semibold text-green-600 mb-6 animate-pulse">
            Goal Reached! 🎉
          </p>
        )}

        <div className="flex flex-col space-y-4">
          <button
            onClick={handleIncrement}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            Increment
          </button>

          <button
            onClick={handleDecrement}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            Decrement
          </button>

          <button
            onClick={handleReset}
            className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
