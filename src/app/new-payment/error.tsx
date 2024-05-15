"use client";

import React from "react";

const NewPaymentError = () => {
  return (
    <main className="flex gap-12 container mx-auto">
      {/* form for options to add new payment reminder*/}
      <div className="flex-1">
        <h2
          className="font-bold mb-4 text-2xl text-gray-900 dark:text-white dark:text-opacity-80 dark:font-semibold dark:mb-4 dark:text-2xl dark:mt-4
            "
        >
          Add new reminder
        </h2>
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">
            {" "}
            Something seriously went wrong.
          </span>
        </div>
      </div>
      {/* calender preview */}
      <div>
        <div className="border-red-100 grid grid-cols-7 my-12">
          {new Array(30).fill(0).map((c, i) => (
            <div
              className="p-2 border-gray-100 bg-gray-800 m-1 rounded-sm grid place-items-center"
              key={i + 1}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default NewPaymentError;
