import React from "react";
import { Login } from "@/components/forms/login";
export default function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:p-24">
            <Login />
        </main>
    );
}