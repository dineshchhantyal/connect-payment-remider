import React from "react";

interface RadioFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const RadioField = ({ label, children, ...props }: RadioFieldProps) => {
  return (
    <label
      htmlFor={label}
      className="bg-gray-100 p-4 rounded-md flex items-center gap-2 cursor-pointer font-semibold text-gray-900
                    hover:bg-gray-200 hover:text-gray-900 hover:border-gray-300
                    dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:hover:border-gray-600 dark: dark:border-gray-600"
    >
      {children}

      <input {...props} />
    </label>
  );
};

export default RadioField;
