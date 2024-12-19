import React, { useState } from "react";
import "./index.css";
import "tailwindcss/tailwind.css";
//interface setup per requirements
interface Match {
  firstName: string;
  lastName: string;
  employer: string;
  startLocation: string;
  endLocation: string;
  startDistanceDelta: number;
  endDistanceDelta: number;
}
//sample data
const matchList: Match[] = [
  {
    firstName: "Sally",
    lastName: "Ride",
    employer: "SharkNinja",
    startLocation: "Mission Hill, MA",
    endLocation: "Natick, MA",
    startDistanceDelta: 0.5,
    endDistanceDelta: 3,
  },
  {
    firstName: "Neil",
    lastName: "Armstrong",
    employer: "Tesla",
    startLocation: "Cambridge, MA",
    endLocation: "Somerville, MA",
    startDistanceDelta: 2,
    endDistanceDelta: 1.5,
  },
  {
    firstName: "Ada",
    lastName: "Lovelace",
    employer: "Google",
    startLocation: "Boston, MA",
    endLocation: "Waltham, MA",
    startDistanceDelta: 1,
    endDistanceDelta: 2.2,
  },
  {
    firstName: "Grace",
    lastName: "Hopper",
    employer: "Amazon",
    startLocation: "Quincy, MA",
    endLocation: "Burlington, MA",
    startDistanceDelta: 3.4,
    endDistanceDelta: 4.1,
  },
  {
    firstName: "Alan",
    lastName: "Turing",
    employer: "Meta",
    startLocation: "Newton, MA",
    endLocation: "Cambridge, MA",
    startDistanceDelta: 1.8,
    endDistanceDelta: 0.9,
  },
  {
    firstName: "Margaret",
    lastName: "Hamilton",
    employer: "MIT",
    startLocation: "Somerville, MA",
    endLocation: "Lexington, MA",
    startDistanceDelta: 2.5,
    endDistanceDelta: 3.3,
  },
  {
    firstName: "Tim",
    lastName: "Berners-Lee",
    employer: "World Wide Web Consortium",
    startLocation: "Concord, MA",
    endLocation: "Boston, MA",
    startDistanceDelta: 4,
    endDistanceDelta: 5.2,
  },
];

const CarpoolCard: React.FC = () => {
  // React state hook for managing current card index
  const [currentIndex, setCurrentIndex] = useState(0);

  // React event handler for button clicks
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % matchList.length);
  };

  // Current match data from state
  const currentMatch = matchList[currentIndex];

  return (
    // Tailwind: Flexbox container with gradient background. Thankfully tailwind lets us easily center the card in the page
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      {/* Tailwind: Card container with shadow and rounded corners */}
      <div className="bg-white shadow-xl rounded-2xl w-96 overflow-hidden">
        {/* Tailwind: Header with contrasting blue background */}
        <div className="bg-blue-600 p-4">
          <h1 className="text-2xl font-bold text-white text-center">
            Carpool Match
          </h1>
        </div>

        {/* Tailwind: Main content padding */}
        <div className="p-6">
          {/* Tailwind: Centered user info with margin */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              {currentMatch.firstName} {currentMatch.lastName}
            </h2>
            <p className="text-blue-600 font-medium">{currentMatch.employer}</p>
          </div>

          {/* Tailwind: Vertical spacing between location cards */}
          <div className="space-y-4">
            {/* Tailwind: Location card styling */}
            <div className="bg-gray-50 rounded-lg p-4">
              {/* Tailwind: Flexbox for location details layout */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-600">Starting Point</span>
                <span className="font-semibold text-gray-800">
                  {currentMatch.startLocation}
                </span>
              </div>
              <div className="flex items-center text-green-600">
                <span className="text-sm">
                  📍 {currentMatch.startDistanceDelta} miles away
                </span>
              </div>
            </div>

            {/* Tailwind: Similar card for destination */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-600">Destination</span>
                <span className="font-semibold text-gray-800">
                  {currentMatch.endLocation}
                </span>
              </div>
              <div className="flex items-center text-green-600">
                <span className="text-sm">
                  📍 {currentMatch.endDistanceDelta} miles away
                </span>
              </div>
            </div>
          </div>

          {/* Tailwind: Button container with gap spacing */}
          <div className="flex justify-between mt-8 gap-4">
            {/* Tailwind: Accept button styling with hover state */}
            <button
              onClick={handleNext} // React event handler
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            >
              👍 Accept
            </button>
            {/* Tailwind: Skip button with neutral styling */}
            <button
              onClick={handleNext} // React event handler
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            >
              👎 Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarpoolCard;
