import { Label } from "@radix-ui/react-label";
import { Input } from "./input";
import {
  FieldValues,
  UseFormRegister,
  Path,
  FieldErrors,
} from "react-hook-form";

type RHFTextFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>; 
  type?: "text" | "password" | "date" | "email" | "number";
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: string;
  errors?: FieldErrors<T>;
};
const RHFTextField = <T extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder,
  register,
  errors,
}: RHFTextFieldProps<T>) => {

  return (
    <div className="grid w-full max-w-sm items-center gap-3 relative mb-8">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        id={name}
      autoComplete="username"
        placeholder={placeholder}
        {...register(name)}
      />
      {errors && errors[name]?.message && (
        <span className="text-xs text-red-600  absolute -bottom-5">{String(errors[name]?.message)}</span>
      )}
    </div>
  );
};
export default RHFTextField;
