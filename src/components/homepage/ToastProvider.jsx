"use client";

import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
    useEffect(() => {
        const loginType = sessionStorage.getItem("loginSuccess");

        const logout = sessionStorage.getItem("logoutSuccess");

        if (loginType) {
            const message =
                loginType === "google"
                    ? "Google SignIn Successful"
                    : "Welcome back!";

            toast.success(message);
            sessionStorage.removeItem("loginSuccess");
        }

        if (logout) {
            toast.success("Signed out successfully");
            sessionStorage.removeItem("logoutSuccess");
        }
    }, []);

    return <ToastContainer />;
}