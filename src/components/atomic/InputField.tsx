import clsx from "clsx";
import React from "react";

interface InputFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const InputField = ({
  label,
  children,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <label htmlFor={label} className="text-sm font-semibold capitalize">
      {children}
      <input
        className={clsx(
          "block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500",
          className
        )}
        {...props}
      />
    </label>
  );
};

export default InputField;
