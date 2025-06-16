"use client"
import { useFormStatus } from "react-dom";
import { Button } from "./button";
import { Loader2Icon } from "lucide-react";
import type { ComponentProps } from "react";


type SubmitButtonProps = {
  children: React.ReactNode;
} & ComponentProps<typeof Button>; 



const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={`flex items-center justify-center py-4 gap-x-4 ${className}`}
      {...rest}
    >
      {children}
      {pending && <Loader2Icon className="animate-spin" />}
    </Button>
  );
};
export default SubmitButton;
