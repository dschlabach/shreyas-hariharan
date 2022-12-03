import React from "react";

const Input = ({ className = "" }: { className?: string }) => {
  return (
    <>
      <input
        type="email"
        placeholder="Enter email"
        className={`rounded-sm placeholder-text-ui-taupe-gray bg-secondary h-12 w-60 px-4 font-light ${
          className ? className : ""
        }`}
      />
    </>
  );
};

export default Input;
