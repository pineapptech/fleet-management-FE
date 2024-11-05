import React from "react";

const Button = React.forwardRef(
  ({ children, className, variant, ...props }, ref) => {
    const variantStyles = {
      primary: "bg-primary-bg text-primary-fg",
      outline: "border-primary-bg text-primary-bg",
    };

    return (
      <button
        className={`inline-block px-4 py-2 rounded-md hover:scale-105 active:scale-95 transition-transform ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
