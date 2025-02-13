import React from 'react'

export const Button = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Click Me
        </button>
      </div>
    );
  }
