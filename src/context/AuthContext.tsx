"use client";
import { signinApi, signupApi } from "@/services/authService";
import { FormSigninData } from "app/(auth)/signin/page";
import { FormSignupData } from "app/(auth)/signup/page";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useReducer } from "react";
import { toast } from "sonner";

type AuthContextType = {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  signin: (data: any) => Promise<void>;
  signup: (data: any) => Promise<void>;
};

type AuthAction =
  | { type: "loading" }
  | { type: "rejected"; payload: string }
  | { type: "signin" | "signup"; payload: any };

type AuthState = {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "signin":
      return {
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case "signup":
      return {
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  const router = useRouter();

  const signin = async (values: FormSigninData) => {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const errMsg = err.response?.data?.message;
      dispatch({ type: "rejected", payload: errMsg ?? "Unknown error" });
      toast.error(errMsg || "خطایی رخ داد");
    }
  };

  const signup = async (values: FormSignupData) => {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signupApi(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const errMsg = err.response?.data?.message;
      dispatch({ type: "rejected", payload: errMsg ?? "Unknown error" });
      toast.error(errMsg || "خطایی رخ داد");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, error, signin, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("not found Auth Context");
  return context;
}
