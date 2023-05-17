import React, { useState } from "react";
import InputField from "@/components/atomic/InputField";
import RadioField from "@/components/atomic/RadioInput";
import SelectField from "@/components/atomic/SelectField";
import Image from "next/image";

interface AddNewReminderFormProps
  extends React.HTMLAttributes<HTMLFormElement> {
  onSubmit: (data: any) => void;
}

const AddNewReminderForm = ({
  onSubmit,
  ...props
}: AddNewReminderFormProps) => {
  const [formData, setFormData] = useState<PaymentInput>({
    title: "",
    amount: 0,
    category: "donation",
    duration: new Date(),
    description: "",
    paymentType: "one-time",
    paymentMethod: "credit-card",
    currency: "USD",
  });

  console.log(formData.duration.toISOString());

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name == "duration") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: new Date(value),
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  return (
    <form onSubmit={handleFormSubmit} {...props}>
      <InputField
        label="Title"
        type="text"
        id="title"
        required
        placeholder="Enter title"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
      >
        Title
      </InputField>

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
            <Image src="/images/flags/us.svg" alt="us" width={16} height={16} />
            <span className="ml-1">USD </span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
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
              value={formData.amount}
              onChange={handleInputChange}
              name="amount"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 my-4">
        <label htmlFor="type" className="text-sm font-semibold">
          Type
        </label>
        <div className="flex gap-4">
          <div className="flex items-center gap-3">
            <RadioField
              label="one-time"
              type="radio"
              id="one-time"
              value="one-time"
              checked={formData.paymentType === "one-time"}
              onChange={handleInputChange}
              name="type"
            >
              One-time
            </RadioField>
            <RadioField
              label="monthly"
              type="radio"
              id="monthly"
              value="monthly"
              checked={formData.paymentType === "monthly"}
              onChange={handleInputChange}
              name="type"
            >
              Monthly
            </RadioField>
            <RadioField
              label="yearly"
              type="radio"
              id="yearly"
              value="yearly"
              checked={formData.paymentType === "yearly"}
              onChange={handleInputChange}
              name="type"
            >
              Yearly
            </RadioField>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 my-4">
        <div className="relative w-full">
          <InputField
            label="duration"
            type="datetime-local"
            id="duration"
            placeholder="Date"
            value={formData.duration.toISOString().slice(0, 16)}
            onChange={handleInputChange}
            name="duration"
            required
          >
            Duration
          </InputField>
        </div>
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
            value={formData.description}
            name="description"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 my-4">
        <div className="relative w-full">
          <SelectField
            label="category"
            id="category"
            value={formData.category}
            onChange={handleInputChange}
            options={[
              { value: "donation", label: "Donation" },
              { value: "subscription", label: "Subscription" },
              { value: "membership", label: "Membership" },
              { value: "bills", label: "Bills" },
              { value: "other", label: "Other" },
            ]}
            name="category"
          >
            Category
          </SelectField>
        </div>
      </div>

      <div className="flex flex-col gap-2 my-4">
        <div className="relative w-full">
          <SelectField
            label="paymentMethod"
            id="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
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
            name="paymentMethod"
          >
            Payment Method
          </SelectField>
        </div>
      </div>

      <button
        className="w-full p-2.5 mt-4 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        type="submit"
      >
        Add Payment
      </button>
    </form>
  );
};

export default AddNewReminderForm;
