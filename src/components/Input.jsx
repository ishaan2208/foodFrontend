import React from "react";

const Input = (
  { type = "text", label, className = "", error, ...props },
  ref
) => {
  return (
    <div className=" flex flex-col items-start mb-1">
      <label htmlFor={label} className=" inline-block mb-2">
        {label}
      </label>
      <input
        type={type}
        className={` ${className} rounded-md text-white py-2 bg-slate-800`}
        id={label}
        ref={ref}
        {...props}
        autoComplete="off"
      />
      <div className=" h-8 flex items-center justify-end w-full">
        {error && (
          <p className=" text-red-500 text-right mt-4">
            {error.message ? <>{error.message}</> : "This field is required"}
          </p>
        )}
      </div>
    </div>
  );
};

export default React.forwardRef(Input);
