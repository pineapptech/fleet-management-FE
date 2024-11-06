import React from "react";

const Button = React.forwardRef(
  ({ children, className, variant, ...props }, ref) => {
    const variantStyles = {
      primary: "bg-primary text-foreground",
      outline: "border-primary text-primary",
    };

    return (
      <button
        className={`inline-block px-4 py-2 rounded-md hover:scale-105 active:scale-100 transition-transform ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
