"use client";

import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
    useEffect(() => {
        const loginType = sessionStorage.getItem("loginSuccess");

        if (loginType === "google") {
            toast.success("Google login successful");
            sessionStorage.removeItem("loginSuccess");
        }
    }, []);

    return <ToastContainer />;
}