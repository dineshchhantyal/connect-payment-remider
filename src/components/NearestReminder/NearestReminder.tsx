import React from "react";

const NearestReminder = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold">Coming soon!</h2>
      <div className="bg-gray-800 p-2 rounded-lg">
        <h6 className="font-semibold">eSEWA online payment</h6>
        <p className="text-gray-300 text-sm">Due Today | $9.99</p>
      </div>
      <div className="bg-gray-800 p-2 rounded-lg">
        <h6 className="font-semibold">Kubernetes</h6>
        <p className="text-gray-300 text-sm">Due 09 May | $19.99</p>
      </div>
    </div>
  );
};

export default NearestReminder;
