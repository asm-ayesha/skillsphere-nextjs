"use client";

import { authClient } from "@/lib/auth-client";
// import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

export default function SignIn() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false)

  const searchParams = useSearchParams();
  const callbackUrl =   searchParams.get("callbackUrl") ||
  searchParams.get("callbackURL") ||
  "/";

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: callbackUrl,
    })
    if (!error) {
      sessionStorage.setItem("loginSuccess", "email");
    }

    if (error) {
      setErrorMsg(error.message || "Login failed");
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      sessionStorage.setItem("loginSuccess", "google");
      await authClient.signIn.social({
        provider: "google",
        callbackURL: callbackUrl,
      });
    } catch (err) {
      setErrorMsg("Google login failed");
    }
  }

  return (
    <Card className="border border-sky-200 shadow-md mx-auto w-full max-w-md py-6 mt-5 px-3 sm:px-4">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      {errorMsg && (
        <p className="text-red-500 text-center text-sm">{errorMsg}</p>
      )}


      <Form onSubmit={onSubmit} className="flex w-full flex-col gap-3 sm:gap-4" >
        <TextField
          isRequired
          name="email"
          type="email"

        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type={isShowPassword ? "text" : "password"}
          className={"relative"}

        >
          <Label>Password</Label>
          <Input
            placeholder="Enter your password" />
          <span className="absolute right-3 top-8" onClick={() => setIsShowPassword(!isShowPassword)} >
            {
              isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
            }
          </span>
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button className='w-full bg-sky-700 hover:bg-sky-900' type="submit">

            Sign In
          </Button>

        </div>
      </Form>
      <p className="text-center ">Or</p>

      <Button onClick={handleGoogleSignIn} variant="outline" className={'w-full border border-gray-200'} >
        <GrGoogle></GrGoogle>
        Sign In With Google
      </Button>

      <p className="text-center text-gray-400">
        Don`t have an account?
        <Link className="ml-2 text-sky-400" href={'/signup'} >Sign Up</Link>
      </p>
    </Card>
  );
}