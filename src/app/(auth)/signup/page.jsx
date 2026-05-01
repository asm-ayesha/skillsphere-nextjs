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
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const router = useRouter()

    const onSubmit = async (e) =>{
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        

       const {data, error} = await authClient.signUp.email({ 
        name,
        email,
        password,
        image,
       })

       console.log({ data, error})

       if(!error){
        router.push('/signin')
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

        <TextField isRequired name="image" type="text">
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
          <Input placeholder="john@example.com" />
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