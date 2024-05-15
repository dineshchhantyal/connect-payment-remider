import React from "react";

const SpecialBundle = () => {
  return (
    <div className="flex flex-col gap-2 mt-8">
      <h2 className="font-bold">Bundle available</h2>
      <div className="bg-gray-800 p-2 rounded-lg">
        <h6 className="font-semibold">Netflix + Amazon Prime</h6>
        <p className="text-gray-300 text-sm">$19.99 only</p>
      </div>
      <div className="bg-gray-800 p-2 rounded-lg">
        <h6 className="font-semibold">Spotify + Apple Music</h6>
        <p className="text-gray-300 text-sm">13.99 only</p>
      </div>
    </div>
  );
};

export default SpecialBundle;
