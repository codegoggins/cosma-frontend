import React from "react";
import { Input, type InputProps } from "antd";

interface CustomInputProps extends InputProps {
  label?: string;
  icon?: React.ReactNode;
  isPassword?: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  icon,
  isPassword,
  className,
  ...props
}) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
      )}
      {isPassword ? (
        <Input.Password
          prefix={
            icon ? (
              <span className="text-muted-foreground mr-2">{icon}</span>
            ) : null
          }
          className={`h-10 ${className}`}
          {...props}
        />
      ) : (
        <Input
          prefix={
            icon ? (
              <span className="text-muted-foreground mr-2">{icon}</span>
            ) : null
          }
          className={`h-10 ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
