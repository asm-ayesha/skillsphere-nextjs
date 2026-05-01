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

export default function SignIn() {
    const onSubmit = async (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        
       const {data, error} = await authClient.signIn.email({ 
        email,
        password,
        callbackURL: '/'
       })

       console.log({ data, error})
    }
  
  return (
    <Card className="border border-sky-200 shadow-md mx-auto w-full max-w-md py-6 mt-5 px-3 sm:px-4">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

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
          type="password"
          
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            {/* <Check></Check> */}
            SignUp
          </Button>
          
        </div>
      </Form>
    </Card>
  );
}