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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

export default function SignUpPage() {
  const router = useRouter()
  const [errorMsg, setErrorMsg] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;



    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image
    })

    console.log({ data, error })

    if (error) {
      let message = "Registration failed";

      if (error.message?.toLowerCase().includes("already")) {
        message = "This email is already registered";
      }

      setErrorMsg(message);
      toast.error(message);

    }

    else {

      toast.success("Signup successful ");
      await authClient.signOut();

      setTimeout(() => {
        router.push("/signin");
      }, 1500); // 1.
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      setErrorMsg("Google login failed");
    }
  }

  return (
    <Card className="border border-sky-200 shadow-md mx-auto w-full max-w-md py-6 mt-5 px-3 sm:px-4">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <Form onSubmit={onSubmit} className="flex w-full flex-col gap-3 sm:gap-4" >
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="url">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

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
          type={isShowPassword? "text" : "password"}
          className={"relative"}

        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
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

            Sign Up
          </Button>

        </div>
      </Form>

      <p className="text-center ">Or</p>

      <Button onClick={handleGoogleSignIn} variant="outline" className={'w-full border border-gray-200'} >
        <GrGoogle></GrGoogle>
        Sign In With Google
      </Button>

      <p className="text-center text-gray-400">
        Already have an account?
        <Link className="ml-2 text-sky-400" href={'/signin'} >Sign In</Link>
      </p>
    </Card>
  );
}