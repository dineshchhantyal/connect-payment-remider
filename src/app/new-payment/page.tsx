"use client";
import NearestReminder from "@/components/NearestReminder/NearestRemider";
import InputField from "@/components/atomic/InputField";
import RadioField from "@/components/atomic/RadioInput";
import SelectField from "@/components/atomic/SelectField";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

const NewPayment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Title"
            type="text"
            id="title"
            placeholder="Enter title"
            {...register("title", { required: true })}
          >
            Title
          </InputField>

          {errors.title && (
            <span className="text-red-500">This field is required</span>
          )}
          <div className="my-4">
            <div className="flex">
              <label
                htmlFor="amount"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Amount
              </label>
              <button
                id="dropdown-button-2"
                data-dropdown-toggle="dropdown-search-city"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button"
              >
                <Image
                  src="/images/flags/us.svg"
                  alt="us"
                  width={16}
                  height={16}
                />
                <span className="ml-1">USD </span>
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdown-currency"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button-2"
                >
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
                        <Image
                          src="/images/flags/us.svg"
                          alt="us"
                          width={24}
                          height={24}
                        />
                        USD
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
                        <svg
                          aria-hidden="true"
                          className="h-3.5 w-3.5 rounded-full mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-de"
                          viewBox="0 0 512 512"
                        >
                          <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                          <path d="M0 0h512v170.7H0z" />
                          <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                        </svg>
                        Germany
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="relative w-full ">
                <InputField
                  label="amount"
                  type="number"
                  id="amount"
                  className="rounded-l-none"
                  placeholder="Amount"
                  {...register("amount", {
                    required: true,
                    min: 0,
                    max: 100000,
                  })}
                />
              </div>
            </div>
            {errors.amount && (
              <span className="text-red-500 text-sm">
                Amount is required and should be between 0 and 100000
              </span>
            )}
          </div>
          {/* type of payment one-time, monthly, yearly */}
          <div className="flex flex-col gap-2 my-4">
            <label htmlFor="type" className="text-sm font-semibold">
              Type
            </label>
            {/* use radios  */}
            <div className="flex gap-4">
              <div className="flex items-center gap-3">
                <RadioField
                  label="one-time"
                  type="radio"
                  id="one-time"
                  value="one-time"
                  {...register("type", { required: true })}
                >
                  One-time
                </RadioField>
                <RadioField
                  label="monthly"
                  type="radio"
                  id="monthly"
                  value="monthly"
                  {...register("type", { required: true })}
                >
                  Monthly
                </RadioField>
                <RadioField
                  label="yearly"
                  type="radio"
                  id="yearly"
                  value="yearly"
                  {...register("type", { required: true })}
                >
                  Yearly
                </RadioField>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 my-4">
            <div className="relative w-full">
              <InputField
                label="date"
                type="date"
                id="date"
                placeholder="Date"
                {...register("date", { required: true })}
              >
                Date
              </InputField>
            </div>
            {errors.date && (
              <span className="text-red-500 text-sm">Date is required</span>
            )}
          </div>
          <div className="flex flex-col gap-2 my-4">
            <label htmlFor="description" className="text-sm font-semibold">
              Description
            </label>
            <div className="relative w-full">
              <textarea
                id="description"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Description"
                {...register("description", { required: true })}
              />
            </div>
            {errors.description && (
              <span className="text-red-500 text-sm">
                Description is required
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 my-4">
            <div className="relative w-full">
              <SelectField
                label="category"
                id="category"
                {...register("category", { required: true })}
                options={[
                  { value: "donation", label: "Donation" },
                  { value: "subscription", label: "Subscription" },
                  { value: "membership", label: "Membership" },
                  { value: "bills", label: "Bills" },
                  { value: "other", label: "Other" },
                ]}
              >
                Category
              </SelectField>
            </div>
            {errors.category && (
              <span className="text-red-500 text-sm">Category is required</span>
            )}
          </div>
          <div className="flex flex-col gap-2 my-4">
            <div className="relative w-full">
              <SelectField
                label="paymentMethod"
                id="paymentMethod"
                {...register("paymentMethod", {})}
                options={[
                  { value: "paypal", label: "Paypal" },
                  { value: "stripe", label: "Stripe" },
                  { value: "creditCard", label: "Credit Card" },
                  { value: "bankTransfer", label: "Bank Transfer" },
                  { value: "venmo", label: "Venmo" },
                  { value: "cashapp", label: "Cashapp" },
                  { value: "cash", label: "Cash" },
                  { value: "other", label: "Other" },
                ]}
              >
                Payment Method
              </SelectField>
            </div>
            {errors.paymentMethod && (
              <span className="text-red-500 text-sm">
                Payment Method is required
              </span>
            )}
          </div>
          <button
            className="w-full p-2.5 mt-4 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            type="submit"
          >
            Add Payment
          </button>
        </form>
      </div>
      {/* calender preview */}
      <div>
        <div className="border-red-100 grid grid-cols-7 my-12">
          {new Array(30).fill(0).map((c, i) => (
            <div className="p-2 border-gray-100 bg-gray-800 m-1 rounded-sm grid place-items-center">
              {i + 1}
            </div>
          ))}
        </div>
        <NearestReminder />
      </div>
    </main>
  );
};

export default NewPayment;
